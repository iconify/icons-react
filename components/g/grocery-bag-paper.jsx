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
		"content": `<style>.g2nxb_exy {
  d: path("M10.125 11h3.75a2.625 2.625 0 0 1 2.625 2.625v.75A2.625 2.625 0 0 1 13.875 17h-3.75A2.625 2.625 0 0 1 7.5 14.375v-.75A2.625 2.625 0 0 1 10.125 11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.is19_ccqk {
  d: path("M5 3.5h4.5l2.5 3l2.5-3H19l1 18H4Z");
}
</style><g class="hntgybcog"><path class="is19_ccqk"/><path class="g2nxb_exy"/></g>`,
		"fallback": "uix:grocery-bag-paper",
	});
}

export default Component;
