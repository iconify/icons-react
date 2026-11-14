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
		"content": `<style>.bos-3gbai {
  d: path("M6.5 10h11a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 14.5v-1A3.5 3.5 0 0 1 6.5 10m.5 0V3.5h10V10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vyq8nubpa {
  d: path("M7 15h10v5.5H7Z");
}
</style><g class="hntgybcog"><path class="bos-3gbai"/><path class="vyq8nubpa"/></g>`,
		"fallback": "uix:category-printers",
	});
}

export default Component;
