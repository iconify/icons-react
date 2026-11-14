import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dqc-lmbar {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5c5.5 0 9.5 4 9.5 8.5c0 3-2 4.5-4.5 4.5h-1.5a2 2 0 0 0-1.5 3.25c.75 1 .25 2.75-2 2.75c-5.25 0-9.5-4.25-9.5-9.5S6.75 2.5 12 2.5Zm-5 10h.01m2.24-5h.01m5.49-.25h.01");
}
</style><path class="dqc-lmbar"/>`,
		"fallback": "uix-sharp:colourist",
	});
}

export default Component;
