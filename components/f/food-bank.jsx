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
		"content": `<style>.ctboolijv {
  d: path("m2.5 9.5l2 2.5h15l2-2.5M4.5 12v9h15v-9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xko3e1dnn {
  d: path("M6 12V9.5a2.5 2.5 0 0 1 5 0V12m2.5-2.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M16 7l.75-2");
}
</style><g class="hntgybcog"><path class="ctboolijv"/><path class="xko3e1dnn"/></g>`,
		"fallback": "uix:food-bank",
	});
}

export default Component;
