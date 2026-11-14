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

.m49p5op-v {
  d: path("M10.75 13.75h2.5A1.75 1.75 0 0 1 15 15.5v.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 9 16v-.5a1.75 1.75 0 0 1 1.75-1.75m-.25 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.w6ndcl93w {
  d: path("M4.5 4.5h15a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-.5 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-10");
}
</style><g class="hntgybcog"><path class="w6ndcl93w"/><path class="m49p5op-v"/></g>`,
		"fallback": "uix:chemical-storage",
	});
}

export default Component;
