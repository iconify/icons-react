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
		"content": `<style>.h7yhrubgy {
  d: path("M7 5.5c2.5 7.5 6 11 13 11.5m-9.5 3v-2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mqbnxsmkn {
  d: path("M4 3v17h16");
}
</style><g class="hntgybcog"><path class="mqbnxsmkn"/><path class="h7yhrubgy"/></g>`,
		"fallback": "uix:half-life",
	});
}

export default Component;
