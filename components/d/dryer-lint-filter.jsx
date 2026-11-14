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
		"content": `<style>.e7bx2db1k {
  d: path("M10 8q1-1.25 2 0t2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rd2u59dlh {
  d: path("M3 4h18l-7 8.5V19l-4 2.5v-9Z");
}
</style><g class="hntgybcog"><path class="rd2u59dlh"/><path class="e7bx2db1k"/></g>`,
		"fallback": "uix:dryer-lint-filter",
	});
}

export default Component;
