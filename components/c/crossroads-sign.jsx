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
		"content": `<style>.yi1dhtb4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2l7.5 7.5L12 17L4.5 9.5Zm0 15v5m0-16v7M8.5 9.5h7");
}
</style><path class="yi1dhtb4t"/>`,
		"fallback": "uix-sharp:crossroads-sign",
	});
}

export default Component;
