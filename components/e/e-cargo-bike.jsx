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

.rkju_zscr {
  d: path("M2 17.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m12.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M13 4v7h8.5V4");
}

.sgv56tb5j {
  d: path("M5.5 17.5L9 11h4m5 0v6.5M8.5 3L5.75 6.5h3L6 10");
}
</style><g class="hntgybcog"><path class="rkju_zscr"/><path class="sgv56tb5j"/></g>`,
		"fallback": "uix:e-cargo-bike",
	});
}

export default Component;
