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
		"content": `<style>.psjyukbrz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 19h12v2.5H4Zm3 0V4M5 2.5h12v5H5Zm9 5v4m-4.5 3H18M17 5l3.5 2.5");
}
</style><path class="psjyukbrz"/>`,
		"fallback": "uix-sharp:drill-press",
	});
}

export default Component;
