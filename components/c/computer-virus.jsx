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

.l-l5p5zaw {
  d: path("M9.5 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m4.25-1.75l1-1m-1 4.5l1 1m-4.5-4.5l-1-1m1 4.5l-1 1M14.5 10H16m-6.5 0H8");
}

.ns0c7bbfw {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v4.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 12.125v-4.25A4.375 4.375 0 0 1 6.875 3.5M12 16.5v4m-4 0h8");
}
</style><g class="hntgybcog"><path class="ns0c7bbfw"/><path class="l-l5p5zaw"/></g>`,
		"fallback": "uix:computer-virus",
	});
}

export default Component;
