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
		"content": `<style>.hs05gxb7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5L9 3.5l4 6.5l2.5-2.5l3.287 4.696M2.5 20.5h10m3 .5v-2m3 2v-4m3 4v-6");
}
</style><path class="hs05gxb7s"/>`,
		"fallback": "uix-sharp:climbing-grade",
	});
}

export default Component;
