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
		"content": `<style>.hztqi4dke {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 7h4v3c2 .5 3 2 3 4v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-5c0-2 1-3.5 3-4Zm0 0c0-2.5 1-3.5 2-3.5s2 1 2 3.5m-5.5 8H11");
}
</style><path class="hztqi4dke"/>`,
		"fallback": "uix-sharp:category-baby-feeding",
	});
}

export default Component;
