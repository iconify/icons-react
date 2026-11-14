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
		"content": `<style>.d6dr33bul {
  d: path("M10 21.5V13a2.5 2.5 0 0 1 2.5-2.5H21m-6.5 8q3.75-4 7.5 0q-3.75 4-7.5 0m.75 3.5l6-7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.val2izb8g {
  d: path("M3.5 21.5v-13a5 5 0 0 1 5-5H21");
}
</style><g class="hntgybcog"><path class="val2izb8g"/><path class="d6dr33bul"/></g>`,
		"fallback": "uix:blind-corner",
	});
}

export default Component;
