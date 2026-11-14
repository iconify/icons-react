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
		"content": `<style>.be9rdrb3n {
  d: path("M13 21H8v-5");
}

.d_pdzpb1w {
  d: path("M16 3v7c0 2-.75 3.75-2 5l-6 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d_pdzpb1w"/><path class="be9rdrb3n"/></g>`,
		"fallback": "uix:arrow-curve-down-left",
	});
}

export default Component;
