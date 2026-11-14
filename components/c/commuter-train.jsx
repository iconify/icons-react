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

.t874vcivu {
  d: path("M2.5 17.5v-12a2 2 0 0 1 2-2H16A5.5 5.5 0 0 1 21.5 9v8.5Zm3-9.5h3m2.75 0h3M17 8h1.5m-13 4.75h3m2.75 0h3m2.75 0h1.75");
}

.x3182kbkm {
  d: path("M5.25 19.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m10 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="t874vcivu"/><path class="x3182kbkm"/></g>`,
		"fallback": "uix:commuter-train",
	});
}

export default Component;
