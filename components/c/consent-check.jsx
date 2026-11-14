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

.oaqids5ed {
  d: path("m7.5 12.5l3 3l6-7");
}

.p7r4cbb7y {
  d: path("M10.5 3.5h3a7 7 0 0 1 7 7v3a7 7 0 0 1-7 7h-3a7 7 0 0 1-7-7v-3a7 7 0 0 1 7-7");
}
</style><g class="hntgybcog"><path class="p7r4cbb7y"/><path class="oaqids5ed"/></g>`,
		"fallback": "uix:consent-check",
	});
}

export default Component;
