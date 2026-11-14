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
		"content": `<style>.a0lht_btl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3.25l8.5 4.25l-8.5 4.25L3.5 7.5ZM3.5 12l8.5 4.25L20.5 12m-17 4.5l8.5 4.25l8.5-4.25m-10-9.75l3 1.5");
}
</style><path class="a0lht_btl"/>`,
		"fallback": "uix-sharp:composite-layers",
	});
}

export default Component;
