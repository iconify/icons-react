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
		"content": `<style>.nnk-82b_y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19v5h-19Zm1 17L6 8.5l2.5 12m7 0l2.5-12l2.5 12M6 8.5l3-5m1.5 5l3-5m1.5 5l3-5");
}
</style><path class="nnk-82b_y"/>`,
		"fallback": "uix-sharp:crowd-barrier",
	});
}

export default Component;
