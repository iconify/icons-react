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

.jj2osdcfs {
  d: path("m9.5 19.5l2.5-5l2.5 5M2.5 7Q4.75 5 7 7t4.5 0T16 7t5.5 0");
}

.k4f0--xzx {
  d: path("M4 19.5a8 8 0 0 1 16 0m-17.5 0h19");
}
</style><g class="hntgybcog"><path class="k4f0--xzx"/><path class="jj2osdcfs"/></g>`,
		"fallback": "uix:beach-camping",
	});
}

export default Component;
