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

.or30f3rrs {
  d: path("M11 7L9 18l3 3.5l3-3.5l-2-11");
}

.xi1rx4wyk {
  d: path("M11.921 3h.158a1.5 1.5 0 0 1 1.455 1.864l-.291 1.166A1.28 1.28 0 0 1 12 7a1.28 1.28 0 0 1-1.243-.97l-.291-1.166A1.5 1.5 0 0 1 11.921 3");
}
</style><g class="hntgybcog"><path class="xi1rx4wyk"/><path class="or30f3rrs"/></g>`,
		"fallback": "uix:bow-tie-knot",
	});
}

export default Component;
