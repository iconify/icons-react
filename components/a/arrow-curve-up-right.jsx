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
		"content": `<style>.ar6h56e9e {
  d: path("M11 3h5v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oiw-qyb_h {
  d: path("M8 21v-7c0-2 .75-3.75 2-5l6-6");
}
</style><g class="hntgybcog"><path class="oiw-qyb_h"/><path class="ar6h56e9e"/></g>`,
		"fallback": "uix:arrow-curve-up-right",
	});
}

export default Component;
