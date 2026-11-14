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
		"content": `<style>.gywwqpbfb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5h19l-2 11h-15Zm4.5 0l3-6m7 6l-3-6");
}
</style><path class="gywwqpbfb"/>`,
		"fallback": "uix-sharp:basket-empty",
	});
}

export default Component;
