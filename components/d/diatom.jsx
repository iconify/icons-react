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
		"content": `<style>.c2_6wb-bq {
  d: path("M8.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m9.25-5.75L20 4M6.25 6.25L4 4m13.75 13.75L20 20M6.25 17.75L4 20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vbj2lk1_x {
  d: path("M4 12a8 8 0 1 0 16 0a8 8 0 1 0-16 0");
}
</style><g class="hntgybcog"><path class="vbj2lk1_x"/><path class="c2_6wb-bq"/></g>`,
		"fallback": "uix:diatom",
	});
}

export default Component;
