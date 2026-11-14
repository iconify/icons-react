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
		"content": `<style>.zr8qx0b9m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9h17v2.5h-17ZM5 11.5L6.5 21h11l1.5-9.5M14 9l3.5-6.5m-11 2H10V9H6.5Z");
}
</style><path class="zr8qx0b9m"/>`,
		"fallback": "uix-sharp:cleaning-supplies",
	});
}

export default Component;
