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
		"content": `<style>.bei5ppbai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10V7a2 2 0 0 1 2-2h1.5m3 0l2 2h1m3 0H19a2 2 0 0 1 2 2v1.5m0 3.5v3a2 2 0 0 1-2 2h-2m-6.5 0h3M7 19H5a2 2 0 0 1-2-2v-3");
}
</style><path class="bei5ppbai"/>`,
		"fallback": "uix-sharp:folder-dashed",
	});
}

export default Component;
