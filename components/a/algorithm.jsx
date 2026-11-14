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
		"content": `<style>.qsote6bxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 2.5h6.5A1.75 1.75 0 0 1 17 4.25A1.75 1.75 0 0 1 15.25 6h-6.5A1.75 1.75 0 0 1 7 4.25A1.75 1.75 0 0 1 8.75 2.5M12 6v2.75L16.5 12L12 15.25L7.5 12L12 8.75m0 6.5V18m-3.25 0h6.5A1.75 1.75 0 0 1 17 19.75a1.75 1.75 0 0 1-1.75 1.75h-6.5A1.75 1.75 0 0 1 7 19.75A1.75 1.75 0 0 1 8.75 18");
}
</style><path class="qsote6bxf"/>`,
		"fallback": "uix:algorithm",
	});
}

export default Component;
