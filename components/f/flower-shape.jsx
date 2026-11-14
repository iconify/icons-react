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

.q5w3nxbzv {
  d: path("M10.25 9a3.5 3.5 0 1 1 3.5 0a3.5 3.5 0 1 1 1.75 3a3.5 3.5 0 1 1-1.75 3a3.5 3.5 0 1 1-3.5 0a3.5 3.5 0 1 1-1.75-3a3.5 3.5 0 1 1 1.75-3");
}

.vwl52ubwq {
  d: path("M10.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="q5w3nxbzv"/><path class="vwl52ubwq"/></g>`,
		"fallback": "uix:flower-shape",
	});
}

export default Component;
