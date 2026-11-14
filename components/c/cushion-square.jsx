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
		"content": `<style>.mv8_ar2jy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5q8.5 3 17 0q-3 8.5 0 17q-8.5-3-17 0q3-8.5 0-17ZM12 12h.01");
}
</style><path class="mv8_ar2jy"/>`,
		"fallback": "uix-sharp:cushion-square",
	});
}

export default Component;
