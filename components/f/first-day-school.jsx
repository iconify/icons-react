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

.jxyddgrou {
  d: path("M8 21.5V16a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 16 16v5.5");
}

.qf7lq7yyd {
  d: path("M11.125 5.5h1.75A6.125 6.125 0 0 1 19 11.625v3.75a6.125 6.125 0 0 1-6.125 6.125h-1.75A6.125 6.125 0 0 1 5 15.375v-3.75A6.125 6.125 0 0 1 11.125 5.5M10 5.5v-1a2 2 0 0 1 4 0v1");
}
</style><g class="hntgybcog"><path class="qf7lq7yyd"/><path class="jxyddgrou"/></g>`,
		"fallback": "uix:first-day-school",
	});
}

export default Component;
