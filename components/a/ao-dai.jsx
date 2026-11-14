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
		"content": `<style>.op_g48bom {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.25L7.5 5l-4 9.5h2l3-6l1 4.5l-1 8.5h7l-1-8.5l1-4.5l3 6h2l-4-9.5l-2.5-.75Zm.875-1.75h2.25a.875.875 0 0 1 .875.875a.875.875 0 0 1-.875.875h-2.25A.875.875 0 0 1 10 3.375a.875.875 0 0 1 .875-.875M9.5 13l-4 8m9-8l4 8");
}
</style><path class="op_g48bom"/>`,
		"fallback": "uix:ao-dai",
	});
}

export default Component;
