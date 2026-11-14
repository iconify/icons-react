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
		"content": `<style>.fpk1ssb_j {
  d: path("M9.25 12a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ijq7_cbts {
  d: path("M3.5 12a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0");
}

.z26x_db9z {
  d: path("M2.5 12C6 4.5 18 4.5 21.5 12C18 19.5 6 19.5 2.5 12");
}
</style><g class="hntgybcog"><path class="z26x_db9z"/><path class="fpk1ssb_j"/><path class="ijq7_cbts"/></g>`,
		"fallback": "uix:contact-lens",
	});
}

export default Component;
