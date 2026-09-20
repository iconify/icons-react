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

.l8ayoxl9v {
  fill: currentColor;
  d: path("M5 13V5l4 4c1 -0.5 5 -0.5 6 0l4 -4v8c1 2 1 5 -1 7S8 22 6 20s-2 -5 -1 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vijzu2b4y {
  d: path("M5 13V5l4 4c1 -0.5 5 -0.5 6 0l4 -4v8c1 2 1 5 -1 7S8 22 6 20s-2 -5 -1 -7");
}

.zo-oy-vgw {
  d: path("m10 15 2 2 2 -2");
}
</style><g class="hntgybcog"><path class="l8ayoxl9v"/><path class="vijzu2b4y"/><path class="zo-oy-vgw"/></g>`,
		"fallback": "iconmind:cat-duotone-thin",
	});
}

export default Component;
