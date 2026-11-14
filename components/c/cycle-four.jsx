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
		"content": `<style>.ky_k67b0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4h10m-2-2l2 2l-2 2m5 1v10m-2-2l2 2l2-2m-5 5H7m2-2l-2 2l2 2m-5-5V7M2 9l2-2l2 2");
}
</style><path class="ky_k67b0g"/>`,
		"fallback": "uix:cycle-four",
	});
}

export default Component;
