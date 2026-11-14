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
		"content": `<style>.edi8zabgz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15V6h-15Zm0 15.5h15v3.5h-15Zm3-12v12m9-12v12m-9-6l9-3");
}
</style><path class="edi8zabgz"/>`,
		"fallback": "uix-sharp:fibre-material",
	});
}

export default Component;
