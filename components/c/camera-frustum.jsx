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
		"content": `<style>.q586xobyv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9h6v6h-6Zm15-6l4 3v15l-4-3Zm-9 7.5l9-7.5m-9 10.5l9 4.5");
}
</style><path class="q586xobyv"/>`,
		"fallback": "uix-sharp:camera-frustum",
	});
}

export default Component;
