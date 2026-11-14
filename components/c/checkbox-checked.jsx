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
		"content": `<style>.al1eq6b_t {
  d: path("M8.375 4h7.25A4.375 4.375 0 0 1 20 8.375v7.25A4.375 4.375 0 0 1 15.625 20h-7.25A4.375 4.375 0 0 1 4 15.625v-7.25A4.375 4.375 0 0 1 8.375 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m2g2-tdsd {
  d: path("m7.75 12l3 3l5.5-5.75");
}
</style><g class="hntgybcog"><path class="al1eq6b_t"/><path class="m2g2-tdsd"/></g>`,
		"fallback": "uix:checkbox-checked",
	});
}

export default Component;
