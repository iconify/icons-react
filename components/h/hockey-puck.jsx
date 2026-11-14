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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nvy0qd86y {
  d: path("M3.5 10v4c0 2.5 3.75 4.5 8.5 4.5s8.5-2 8.5-4.5v-4");
}

.ri9trlm_k {
  d: path("M3.5 10a8.5 3.5 0 1 0 17 0a8.5 3.5 0 1 0-17 0");
}
</style><g class="hntgybcog"><path class="ri9trlm_k"/><path class="nvy0qd86y"/></g>`,
		"fallback": "uix:hockey-puck",
	});
}

export default Component;
