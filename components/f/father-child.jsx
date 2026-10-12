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
		"content": `<style>.c7q9cg9gy {
  cx: 7.5px;
  cy: 4.75px;
  r: 2px;
}

.eegh5rjsz {
  cx: 18.25px;
  cy: 12.25px;
  r: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m-5k_-tjn {
  d: path("M15.75 21.25v-2a2.5 2.5 0 0 1 5 0v2ZM12 15.75c2 0 3.75 1.5 3.75 3.5");
}

.vrswtybmz {
  d: path("M3 21.25v-6.5a4.5 4.5 0 0 1 9 0v6.5Z");
}
</style><g class="hntgybcog"><circle class="c7q9cg9gy"/><path class="vrswtybmz"/><circle class="eegh5rjsz"/><path class="m-5k_-tjn"/></g>`,
		"fallback": "iconoven:father-child",
	});
}

export default Component;
