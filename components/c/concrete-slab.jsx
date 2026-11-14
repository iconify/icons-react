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
		"content": `<style>.pd9tmjb-n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9h19v10h-19Zm3 0V7.5a2 2 0 0 1 4 0V9m5 0V7.5a2 2 0 0 1 4 0V9");
}
</style><path class="pd9tmjb-n"/>`,
		"fallback": "uix-sharp:concrete-slab",
	});
}

export default Component;
