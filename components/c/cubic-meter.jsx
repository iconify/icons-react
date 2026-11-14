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

.igd-e6byp {
  d: path("m2.5 7l4-4h11v11l-4 4m0-11l4-4m-15 18h11m7-18v11");
}

.swii37l6g {
  d: path("M4 7h8a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 12 18H4a1.5 1.5 0 0 1-1.5-1.5v-8A1.5 1.5 0 0 1 4 7");
}
</style><g class="hntgybcog"><path class="swii37l6g"/><path class="igd-e6byp"/></g>`,
		"fallback": "uix:cubic-meter",
	});
}

export default Component;
