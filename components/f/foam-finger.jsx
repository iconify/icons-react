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
		"content": `<style>.wber1_b_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 10V5a2.5 2.5 0 0 1 5 0v5h3a2.5 2.5 0 0 1 2.5 2.5V15a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 15v-2.5A2.5 2.5 0 0 1 7.5 10Zm.25 7.5h6.5A1.75 1.75 0 0 1 17 19.25v.5a1.75 1.75 0 0 1-1.75 1.75h-6.5A1.75 1.75 0 0 1 7 19.75v-.5a1.75 1.75 0 0 1 1.75-1.75M13.5 10v4");
}
</style><path class="wber1_b_v"/>`,
		"fallback": "uix:foam-finger",
	});
}

export default Component;
