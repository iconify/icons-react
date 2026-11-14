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

.r_pqzd5pz {
  d: path("M7 3h11.5c1.1 0 2 .9 2 2s-.9 2-2 2H17v12c0 1.4-1.1 2.5-2.5 2.5H5c-1.4 0-2.5-1.1-2.5-2.5v-1.5H5V5c0-1.1.9-2 2-2m1 5.5h5.5M8 11.75h5.5");
}

.u_z2fxbiu {
  fill: currentColor;
  d: path("M9.75 16.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="r_pqzd5pz"/><path class="u_z2fxbiu"/></g>`,
		"fallback": "uix:advance-directive",
	});
}

export default Component;
