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

.k93b51btb {
  d: path("M3 21V6h18v15");
}

.yb8ia9bfw {
  d: path("M8.5 10h7a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 19.5v-8A1.5 1.5 0 0 1 8.5 10M7 13.5h10M7 17h10");
}
</style><g class="hntgybcog"><path class="k93b51btb"/><path class="yb8ia9bfw"/></g>`,
		"fallback": "uix:dock-door",
	});
}

export default Component;
