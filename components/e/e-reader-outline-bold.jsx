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
		"content": `<style>.d3xn50bni {
  d: path("M4 4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.if5ft31dv {
  d: path("M11 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.j5baogbem {
  d: path("M8 11h8");
}

.lnqk7fb0y {
  d: path("M8 15h5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zvg3vyivl {
  d: path("M8 7h8");
}
</style><g class="s0phu2bbs"><path class="d3xn50bni"/><path class="zvg3vyivl"/><path class="j5baogbem"/><path class="lnqk7fb0y"/><path class="if5ft31dv"/></g>`,
		"fallback": "iconmind:e-reader-outline-bold",
	});
}

export default Component;
