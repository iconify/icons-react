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

.skyc11b_j {
  d: path("M7.423 3h9.154a2.625 2.625 0 0 1 2.616 2.416l1.08 13.5a2.625 2.625 0 0 1-2.616 2.834H6.343a2.625 2.625 0 0 1-2.616-2.834l1.08-13.5A2.625 2.625 0 0 1 7.423 3M5 6.25h14");
}

.vecl8hbxi {
  d: path("m7.75 9l2.75 3h3l2.75-3v5.75a4.25 4.25 0 0 1-8.5 0Zm2.75 5.75h.01m2.99 0h.01");
}
</style><g class="hntgybcog"><path class="skyc11b_j"/><path class="vecl8hbxi"/></g>`,
		"fallback": "uix:cat-litter-bag",
	});
}

export default Component;
