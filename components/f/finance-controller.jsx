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
		"content": `<style>.oxm2xwbnh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7.25a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3.5 21c0-4 3.25-6.5 7.5-6.5c1.5 0 2.75.25 4 .75M14.75 18l2 2L21 15.75");
}
</style><path class="oxm2xwbnh"/>`,
		"fallback": "uix:finance-controller",
	});
}

export default Component;
