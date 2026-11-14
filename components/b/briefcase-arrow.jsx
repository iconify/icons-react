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
		"content": `<style>.ho5f-qb3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 7.5h8.25A2.625 2.625 0 0 1 16 10.125v5.75a2.625 2.625 0 0 1-2.625 2.625h-8.25A2.625 2.625 0 0 1 2.5 15.875v-5.75A2.625 2.625 0 0 1 5.125 7.5M7 7.5V5h4.5v2.5m-9 4.5H16m0 3.5h5.5M19 13l2.5 2.5L19 18");
}
</style><path class="ho5f-qb3x"/>`,
		"fallback": "uix:briefcase-arrow",
	});
}

export default Component;
