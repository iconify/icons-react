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
		"content": `<style>.d0d1bcbxk {
  d: path("M7.5 21v-6h4v6m3.5.5q0-6.75 6.75-6.75q0 6.75-6.75 6.75m0 0l3.25-3.25");
}

.heggfebwb {
  d: path("m3.658 6.026l.5-1.5A1.5 1.5 0 0 1 5.581 3.5h12.838a1.5 1.5 0 0 1 1.423 1.026l.5 1.5A1.5 1.5 0 0 1 18.919 8H5.081a1.5 1.5 0 0 1-1.423-1.974M4.5 8v13h7.7m7.3-8.9V8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="heggfebwb"/><path class="d0d1bcbxk"/></g>`,
		"fallback": "uix:health-food-shop",
	});
}

export default Component;
