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

.t6q8guvbm {
  d: path("M4 5.5C4 7 7.6 8.25 12 8.25S20 7 20 5.5M4 12c0 1.5 3.6 2.75 8 2.75q.652 0 1.277-.036M15.75 16.5c0-1.25 1-2 2.25-2s2.25.75 2.25 2C20.25 18 18 18 18 19.25m0 2.25h.01");
}

.v5obwdfjv {
  d: path("M15.27 21.006c-1 .157-2.107.244-3.27.244c-4.4 0-8-1.25-8-2.75v-13C4 4 7.6 2.75 12 2.75S20 4 20 5.5v6.555");
}
</style><g class="hntgybcog"><path class="v5obwdfjv"/><path class="t6q8guvbm"/></g>`,
		"fallback": "uix:data-query",
	});
}

export default Component;
