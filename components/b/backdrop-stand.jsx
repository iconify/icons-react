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

.n_frlqb1j {
  d: path("M2.5 21h3M4 21V4h16v17m-1.5 0h3");
}

.n-hhsg8tm {
  d: path("M7 4v12h10V4");
}
</style><g class="hntgybcog"><path class="n_frlqb1j"/><path class="n-hhsg8tm"/></g>`,
		"fallback": "uix:backdrop-stand",
	});
}

export default Component;
