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
		"content": `<style>.e5ajikb4j {
  d: path("M8 13.5H4.5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2V8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j8xzykbnq {
  d: path("M11.5 8H18a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-6.5A3.5 3.5 0 0 1 8 18v-6.5A3.5 3.5 0 0 1 11.5 8m7.25 0V2.5M16.5 4.75l2.25-2.25L21 4.75");
}
</style><g class="hntgybcog"><path class="e5ajikb4j"/><path class="j8xzykbnq"/></g>`,
		"fallback": "uix:bring-forward",
	});
}

export default Component;
