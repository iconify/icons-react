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

.kdk5ssq4t {
  d: path("M16 10za1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 16 13a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 16 10m4.25-.5l1.5-1m-1.5 5l1.5 1");
}

.t06moibgk {
  d: path("M2.5 17.5V15a6.5 6.5 0 0 1 13 0v2.5m-13 0h16");
}
</style><g class="hntgybcog"><path class="t06moibgk"/><path class="kdk5ssq4t"/></g>`,
		"fallback": "uix:helmet-headlamp",
	});
}

export default Component;
