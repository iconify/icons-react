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
		"content": `<style>.b3xhtvbyq {
  d: path("m8.562 4.925l3.5 1.834A1.75 1.75 0 0 1 13 8.309v7.382a1.75 1.75 0 0 1-.938 1.55l-3.5 1.834a1.75 1.75 0 0 1-1.624 0l-3.5-1.834a1.75 1.75 0 0 1-.938-1.55V8.309a1.75 1.75 0 0 1 .938-1.55l3.5-1.834a1.75 1.75 0 0 1 1.624 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xc_unvbvr {
  d: path("M2.5 7.25L7.75 10L13 7.25M7.75 10v9.5M21.5 12h-5.75m2.75-2.75L15.75 12l2.75 2.75");
}
</style><g class="hntgybcog"><path class="b3xhtvbyq"/><path class="xc_unvbvr"/></g>`,
		"fallback": "uix:api-response",
	});
}

export default Component;
