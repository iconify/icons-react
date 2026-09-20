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
		"content": `<style>.fim5wvb3d {
  d: path("M5.5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j5z_xpbsk {
  d: path("M13.5 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.lhhiiffss {
  d: path("M16.5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.wl0ht0yem {
  d: path("M2.5 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}
</style><g class="hntgybcog"><path class="wl0ht0yem"/><path class="fim5wvb3d"/><path class="j5z_xpbsk"/><path class="lhhiiffss"/></g>`,
		"fallback": "iconmind:active-active-outline-thin",
	});
}

export default Component;
