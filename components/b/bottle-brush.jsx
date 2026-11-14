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
		"content": `<style>.ltgog7bzp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 19a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3-1.25L20.5 3.5M9.75 9.75l4.5 4.5m-2.5-6.5l4.5 4.5m-2.5-6.5l4.5 4.5m-2.5-6.5l4.5 4.5");
}
</style><path class="ltgog7bzp"/>`,
		"fallback": "uix-sharp:bottle-brush",
	});
}

export default Component;
