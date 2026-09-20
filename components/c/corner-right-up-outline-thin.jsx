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
		"content": `<style>.hil4ijbut {
  d: path("m9 9 5 -5 5 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kd5og0akl {
  d: path("M4 20h10V4");
}
</style><g class="hntgybcog"><path class="kd5og0akl"/><path class="hil4ijbut"/></g>`,
		"fallback": "iconmind:corner-right-up-outline-thin",
	});
}

export default Component;
