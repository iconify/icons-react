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
		"content": `<style>.h1nvq6bbq {
  cx: 12px;
  cy: 5.75px;
  r: 2.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k4doyybfm {
  d: path("M10.75 7.75L5.75 21m7.5-13.25l5 13.25m-11.5-5.5c3.25 1.75 7.25 1.75 10.5 0");
}
</style><g class="hntgybcog"><circle class="h1nvq6bbq"/><path class="k4doyybfm"/></g>`,
		"fallback": "iconoven:drawing-compass",
	});
}

export default Component;
