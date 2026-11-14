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
		"content": `<style>.a95ub6bhf {
  d: path("M6 4.5h12A3.5 3.5 0 0 1 21.5 8v8a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16V8A3.5 3.5 0 0 1 6 4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vft_u6oam {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3-7.5v1.75m0 11.5v1.75M2.5 12h3.75m11.5 0h3.75");
}
</style><g class="hntgybcog"><path class="a95ub6bhf"/><path class="vft_u6oam"/></g>`,
		"fallback": "uix:center-composition",
	});
}

export default Component;
