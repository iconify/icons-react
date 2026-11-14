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
		"content": `<style>.ho1l9kwfl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3q4 4 8 0l4.5 2l1 4l-3.5 1v4.5c0 2.5-2.5 4-3.5 6h-5c-1-2-3.5-3.5-3.5-6V10L2.5 9l1-4Zm2.5 14.25h3");
}
</style><path class="ho1l9kwfl"/>`,
		"fallback": "uix:baby-onesie",
	});
}

export default Component;
