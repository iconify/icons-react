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
		"content": `<style>.uaz5_tb4l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5c4-2 6 2 9 0s5 2 9 0m-16 4c3-2 5 2 7 0s4 2 7 0m-12 4c2-2 4 2 5 0s3 2 5 0m-14 8l18-5");
}
</style><path class="uaz5_tb4l"/>`,
		"fallback": "uix:depth-contour",
	});
}

export default Component;
