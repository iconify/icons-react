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

.i1yj1kvwv {
  d: path("m12.25 15l1.5 3.5l1.5-3.5");
}

.ic6tk7bja {
  d: path("M8 2.5h8A3.5 3.5 0 0 1 19.5 6v12a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18V6A3.5 3.5 0 0 1 8 2.5M7.5 7h9m-7 3.5h5M9.25 15v3.5");
}
</style><g class="hntgybcog"><path class="ic6tk7bja"/><path class="i1yj1kvwv"/></g>`,
		"fallback": "uix:front-matter",
	});
}

export default Component;
