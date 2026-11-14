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
		"content": `<style>.epufmkbtj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3h8v3.5H4Zm2 3.5V20m4-13.5V20m-7.5 0h10m6-7.5c-1.25 1.75-3 3.75-3 6a3 3 0 0 0 6 0c0-2.25-1.75-4.25-3-6Z");
}
</style><path class="epufmkbtj"/>`,
		"fallback": "uix-sharp:borehole",
	});
}

export default Component;
