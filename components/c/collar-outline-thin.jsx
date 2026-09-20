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
		"content": `<style>.bo9_g-q3m {
  d: path("M10 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wqteuxb0p {
  d: path("M3 6c0 6 4 9 9 9s9 -3 9 -9");
}
</style><g class="hntgybcog"><path class="wqteuxb0p"/><path class="bo9_g-q3m"/></g>`,
		"fallback": "iconmind:collar-outline-thin",
	});
}

export default Component;
