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

.i-ljidj3m {
  d: path("M7 21.5v-19M7 17c0-6 5-9 10-9");
}

.q28tpvetz {
  d: path("M14.25 5.25L17 8l-2.75 2.75");
}
</style><g class="hntgybcog"><path class="i-ljidj3m"/><path class="q28tpvetz"/></g>`,
		"fallback": "uix:entry-ramp-right",
	});
}

export default Component;
