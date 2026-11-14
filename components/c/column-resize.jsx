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
		"content": `<style>.c8rp37suf {
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5v11A3.5 3.5 0 0 1 18 21H6a3.5 3.5 0 0 1-3.5-3.5v-11A3.5 3.5 0 0 1 6 3m.5 0v18m11-18v18M9 12h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u7qf4dppc {
  d: path("M10.75 10.25L9 12l1.75 1.75m2.5-3.5L15 12l-1.75 1.75");
}
</style><g class="hntgybcog"><path class="c8rp37suf"/><path class="u7qf4dppc"/></g>`,
		"fallback": "uix:column-resize",
	});
}

export default Component;
