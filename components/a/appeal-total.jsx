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
		"content": `<style>.qfz_ghszz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4h12v4h-12ZM5 8h12v4H5Zm2 4h12v4H7Zm-3 8h16");
}
</style><path class="qfz_ghszz"/>`,
		"fallback": "uix-sharp:appeal-total",
	});
}

export default Component;
