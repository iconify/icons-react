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

.mqhj_ra7i {
  d: path("M2.5 4.5h19m-19 15h19M4.25 8h1A1.75 1.75 0 0 1 7 9.75v4.5A1.75 1.75 0 0 1 5.25 16h-1a1.75 1.75 0 0 1-1.75-1.75v-4.5A1.75 1.75 0 0 1 4.25 8");
}

.n6ee8vyxw {
  fill: currentColor;
  d: path("M11.5 8h1a1.75 1.75 0 0 1 1.75 1.75v4.5A1.75 1.75 0 0 1 12.5 16h-1a1.75 1.75 0 0 1-1.75-1.75v-4.5A1.75 1.75 0 0 1 11.5 8");
}

.zlio2ybos {
  d: path("M18.75 8h1a1.75 1.75 0 0 1 1.75 1.75v4.5A1.75 1.75 0 0 1 19.75 16h-1A1.75 1.75 0 0 1 17 14.25v-4.5A1.75 1.75 0 0 1 18.75 8");
}
</style><g class="hntgybcog"><path class="mqhj_ra7i"/><path class="n6ee8vyxw"/><path class="zlio2ybos"/></g>`,
		"fallback": "uix:film-black-white",
	});
}

export default Component;
