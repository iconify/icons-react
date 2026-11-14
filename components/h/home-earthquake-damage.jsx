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
		"content": `<style>.ev1qux2dm {
  d: path("m9.5 4.5l2 4l-2 3l3 3l-1 3m-9 3.5l2.5-.75l2.5.75l2.5-.75l2.5.75l2.5-.75l2.5.75l2.5-.75l1.5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n3whqbs-g {
  d: path("m4.456 8.712l5.875-4.838a2.625 2.625 0 0 1 3.338 0l5.875 4.838a2.63 2.63 0 0 1 .956 2.027v4.136a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 14.875v-4.136a2.63 2.63 0 0 1 .956-2.027");
}
</style><g class="hntgybcog"><path class="n3whqbs-g"/><path class="ev1qux2dm"/></g>`,
		"fallback": "uix:home-earthquake-damage",
	});
}

export default Component;
