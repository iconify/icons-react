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
		"content": `<style>.oiv290bmn {
  d: path("m3 9l2-2.5l2 1L9.5 11H17c1.5 0 2.5 1 2.5 2.5s-1 2-2.5 2h-7c-1 0-1.75-1-2-2L5.5 10l-2 .25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z1jlbeevl {
  d: path("M5.5 6.75C5.5 4 7 2.5 9.5 2.5m1 13v6m7-6v6m1.75-9.25l1.5 1.75");
}
</style><g class="ulnmmdpxh"><path class="oiv290bmn"/><path class="z1jlbeevl"/></g>`,
		"fallback": "uix-sharp:antelope",
	});
}

export default Component;
