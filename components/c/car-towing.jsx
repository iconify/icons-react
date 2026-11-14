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

.q2p5awbsa {
  d: path("M5.125 9h5.75a2.625 2.625 0 0 1 2.625 2.625v3.25a2.625 2.625 0 0 1-2.625 2.625h-5.75A2.625 2.625 0 0 1 2.5 14.875v-3.25A2.625 2.625 0 0 1 5.125 9m8.375 2.5H18l3.5 3.5v2.5h-8");
}

.xur7ml00z {
  d: path("M4.75 19.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m11 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M5 9l4-5.5m0 0h3.5m0 0v3");
}
</style><g class="hntgybcog"><path class="q2p5awbsa"/><path class="xur7ml00z"/></g>`,
		"fallback": "uix:car-towing",
	});
}

export default Component;
