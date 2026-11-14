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

.ra17x9b1a {
  d: path("M13.5 15c2 .75 1.25 2.75 3.25 3.5s2 2.5 4.75 3M14.25 14c2.25 0 2.25-1.5 4.25-1.25c1.5.25 2.25 1.5 3 2.75");
}

.t-gfopbfp {
  d: path("m8.157 6.867l4.915 3.441a3.25 3.25 0 0 1 .798 4.527a3.25 3.25 0 0 1-4.527.798l-4.915-3.441a3.25 3.25 0 0 1-.798-4.527a3.25 3.25 0 0 1 4.527-.798M7 10h.01m3.49 2.5h.01");
}
</style><g class="hntgybcog"><path class="t-gfopbfp"/><path class="ra17x9b1a"/></g>`,
		"fallback": "uix:bacteria",
	});
}

export default Component;
