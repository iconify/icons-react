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
		"content": `<style>.czh0gvf3l {
  d: path("M13 7V2.5H3v19h10V17");
}

.gxdce5b-p {
  d: path("m5.121 3.464l2.5 1.136A1.5 1.5 0 0 1 8.5 5.966v12.483a1.5 1.5 0 0 1-.987 1.41l-2.5.909A1.5 1.5 0 0 1 3 19.358V4.83a1.5 1.5 0 0 1 2.121-1.366M11.25 12H21m-3.5-3.5L21 12l-3.5 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="czh0gvf3l"/><path class="gxdce5b-p"/></g>`,
		"fallback": "uix:fire-exit",
	});
}

export default Component;
