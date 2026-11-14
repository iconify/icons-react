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

.kakwubtds {
  fill: currentColor;
  d: path("M3.5 4.75za1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1m17 0za1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1");
}

.ysirmiopq {
  d: path("M3.5 5.5h17V10c-3.25.5-5.5 3.5-6 8.5h-5c-.5-5-2.75-8-6-8.5Zm0 2.5h17");
}
</style><g class="hntgybcog"><path class="ysirmiopq"/><path class="kakwubtds"/></g>`,
		"fallback": "uix:diaper",
	});
}

export default Component;
