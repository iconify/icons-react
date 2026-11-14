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
		"content": `<style>.cy_ch5b9r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 16H20.5M3.75 16a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M3.5 7.5l2.25 2.25L10 5.5");
}
</style><path class="cy_ch5b9r"/>`,
		"fallback": "uix:ces-effort",
	});
}

export default Component;
