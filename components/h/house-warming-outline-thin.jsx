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

.rsz3y4a_c {
  d: path("M4 19v-7l7 -7 7 7v7Z");
}

.u-niy3p1t {
  d: path("M11 16c-2 -1 -2 -4 0 -5 2 1 2 4 0 5");
}
</style><g class="hntgybcog"><path class="rsz3y4a_c"/><path class="u-niy3p1t"/></g>`,
		"fallback": "iconmind:house-warming-outline-thin",
	});
}

export default Component;
