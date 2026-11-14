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

.mli12z8_s {
  d: path("M11 6q-3 4-2.5 11m9.5-3v3");
}

.q1957uivs {
  d: path("M3 17v-2c0-5.5 3.5-9 8-9s7 3.5 7 8l3.5 1.5V17Z");
}
</style><g class="hntgybcog"><path class="q1957uivs"/><path class="mli12z8_s"/></g>`,
		"fallback": "uix:baseball-cap-sport",
	});
}

export default Component;
