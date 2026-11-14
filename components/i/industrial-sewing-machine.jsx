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
		"content": `<style>.xz78v1bpa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 16V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3H9v7m-6.5 0h19v4.5h-19Zm15-7v4");
}
</style><path class="xz78v1bpa"/>`,
		"fallback": "uix-sharp:industrial-sewing-machine",
	});
}

export default Component;
