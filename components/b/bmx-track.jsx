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

.safmdkbkl {
  d: path("M7.5 11h4l-2-4m-1 0h2m1 4l3-4.5l2 4.5m-2-4.5l-.75-2h1.5M2.5 20.5c4 0 6-3.75 9.5-3.75s5.5 3.75 9.5 3.75");
}

.uf0flpb6r {
  d: path("M4.5 11a3 3 0 1 0 6 0a3 3 0 1 0-6 0m9 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="uf0flpb6r"/><path class="safmdkbkl"/></g>`,
		"fallback": "uix:bmx-track",
	});
}

export default Component;
