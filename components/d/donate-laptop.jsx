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
		"content": `<style>.n3tyi1bix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.1 15.5H4.5v-11h15v7.2m-17 6.8h8.6m6.9-4v7m-3-3l3 3l3-3");
}
</style><path class="n3tyi1bix"/>`,
		"fallback": "uix-sharp:donate-laptop",
	});
}

export default Component;
