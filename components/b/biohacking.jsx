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
		"content": `<style>.d5lok-brn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 8.5v3.75a5 5 0 1 0 5 0V8.5m-2.5-6V7m-1.5-4.5h3M12 14h.01");
}
</style><path class="d5lok-brn"/>`,
		"fallback": "uix-sharp:biohacking",
	});
}

export default Component;
