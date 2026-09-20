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
		"content": `<style>.a6o5bdc8o {
  d: path("m16 5 4 4 -4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jof7c9fpk {
  d: path("M4 9h16");
}

.m-p3hbclp {
  d: path("M4 15h16");
}

.z8bw_gbrq {
  d: path("m8 11 -4 4 4 4");
}
</style><g class="hntgybcog"><path class="jof7c9fpk"/><path class="a6o5bdc8o"/><path class="m-p3hbclp"/><path class="z8bw_gbrq"/></g>`,
		"fallback": "iconmind:arrow-right-left-outline-thin",
	});
}

export default Component;
