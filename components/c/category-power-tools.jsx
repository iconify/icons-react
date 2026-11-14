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
		"content": `<style>.pkukdlbpe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5H5m0-2h3v4H5Zm3-1h12v6H8Zm4 6h5V17h-5ZM9.5 17h10v4.5h-10Z");
}
</style><path class="pkukdlbpe"/>`,
		"fallback": "uix-sharp:category-power-tools",
	});
}

export default Component;
