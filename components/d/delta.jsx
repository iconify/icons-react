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
		"content": `<style>.yj4liac9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.525 6.212l6.008 10.68a1.75 1.75 0 0 1-1.525 2.608H5.992a1.75 1.75 0 0 1-1.525-2.608l6.008-10.68a1.75 1.75 0 0 1 3.05 0");
}
</style><path class="yj4liac9u"/>`,
		"fallback": "uix:delta",
	});
}

export default Component;
