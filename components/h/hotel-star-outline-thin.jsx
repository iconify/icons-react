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
		"content": `<style>.d5czi6rdr {
  d: path("M3 4a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.e_zu0lb2f {
  d: path("M10 22v-5h4v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rju00-nqb {
  d: path("m12 5.5 2 2 -2 2 -2 -2Z");
}

.s09hy0b0y {
  d: path("M7 11h10");
}
</style><g class="hntgybcog"><path class="d5czi6rdr"/><path class="e_zu0lb2f"/><path class="rju00-nqb"/><path class="s09hy0b0y"/></g>`,
		"fallback": "iconmind:hotel-star-outline-thin",
	});
}

export default Component;
