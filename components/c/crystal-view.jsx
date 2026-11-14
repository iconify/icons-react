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

.ib1r710-f {
  d: path("M9.703 8h4.594a1.5 1.5 0 0 1 1.153.54l1.211 1.453a1.5 1.5 0 0 1-.047 1.974l-3.508 3.827a1.5 1.5 0 0 1-2.212 0l-3.508-3.827a1.5 1.5 0 0 1-.047-1.974L8.55 8.54A1.5 1.5 0 0 1 9.703 8M6.5 11h11");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="ib1r710-f"/></g>`,
		"fallback": "uix:crystal-view",
	});
}

export default Component;
