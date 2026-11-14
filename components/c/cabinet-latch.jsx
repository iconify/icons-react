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
		"content": `<style>.gk04hwbvr {
  d: path("M9.5 10.5h5A1.5 1.5 0 0 1 16 12a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 12a1.5 1.5 0 0 1 1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q0ez36uqa {
  d: path("M7 2.5h10A3.5 3.5 0 0 1 20.5 6v12a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18V6A3.5 3.5 0 0 1 7 2.5m5 0v8m0 3v8");
}
</style><g class="hntgybcog"><path class="q0ez36uqa"/><path class="gk04hwbvr"/></g>`,
		"fallback": "uix:cabinet-latch",
	});
}

export default Component;
