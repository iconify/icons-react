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
		"content": `<style>.asaq2m23g {
  d: path("m15 20 4 -4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j587xtbwm {
  d: path("m14 15 4 4");
}

.uih_zvhtv {
  d: path("M4 21h16");
}

.yf982jbnt {
  d: path("M6 14C6 8 10 4 16 4c0 6 -4 10 -10 10");
}
</style><g class="hntgybcog"><path class="yf982jbnt"/><path class="j587xtbwm"/><path class="asaq2m23g"/><path class="uih_zvhtv"/></g>`,
		"fallback": "iconmind:autumn-outline-thin",
	});
}

export default Component;
