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
		"content": `<style>.gheyd0q8f {
  d: path("M6 7h12a3.5 3.5 0 0 1 3.5 3.5v3A3.5 3.5 0 0 1 18 17H6a3.5 3.5 0 0 1-3.5-3.5v-3A3.5 3.5 0 0 1 6 7m9 0v10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pbmrk3btd {
  d: path("m16.75 11.25l1.5 1.5l1.5-1.5M6 12h5");
}
</style><g class="hntgybcog"><path class="gheyd0q8f"/><path class="pbmrk3btd"/></g>`,
		"fallback": "uix:dropdown-cell",
	});
}

export default Component;
