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
		"content": `<style>.a_28nlann {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.1 18H3V3h15v11.1M3 13h11.1m2.8 0H18m-2.5 2.5l5 5m0-5l-5 5");
}
</style><path class="a_28nlann"/>`,
		"fallback": "uix-sharp:colour-swatch-remove",
	});
}

export default Component;
