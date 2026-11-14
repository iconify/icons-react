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
		"content": `<style>.ki8w25n_h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm12 2h1.5a2.5 2.5 0 0 1 0 5H16M8 7.25c-1-1.5 1-2.5 0-4M13.5 10c0-3 1.5-5 5-6c0 3.5-2 5-5 6");
}
</style><path class="ki8w25n_h"/>`,
		"fallback": "uix-sharp:herbal-tea",
	});
}

export default Component;
