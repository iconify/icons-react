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
		"content": `<style>.djjiqhvra {
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7v10a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17V7A3.5 3.5 0 0 1 6 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n--5wxb8b {
  d: path("M6 7.5q1.5-1.5 3 0t3 0t3 0t3 0M6 12q1.5-1.5 3 0t3 0t3 0t3 0M6 16.5q1.5-1.5 3 0t3 0t3 0t3 0");
}
</style><g class="hntgybcog"><path class="djjiqhvra"/><path class="n--5wxb8b"/></g>`,
		"fallback": "uix:corrugated-board",
	});
}

export default Component;
