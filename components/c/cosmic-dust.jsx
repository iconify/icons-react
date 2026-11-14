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
		"content": `<style>.ucc9wvb-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3c.5 4.5 1.5 5.5 6 6c-4.5.5-5.5 1.5-6 6c-.5-4.5-1.5-5.5-6-6c4.5-.5 5.5-1.5 6-6Zm9 2h.01m1.49 7h.01m-5.01 5h.01M8 20h.01M20 19.5h.01");
}
</style><path class="ucc9wvb-c"/>`,
		"fallback": "uix-sharp:cosmic-dust",
	});
}

export default Component;
