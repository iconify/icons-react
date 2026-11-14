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
		"content": `<style>.yrr0stbvk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11h17L19 19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19Zm3 0C6 8.5 8 7 10 7.5c0-2.5 2-4 4.5-3c-1 1-.5 2.5.5 3c2 0 3 1.5 2.5 3.5");
}
</style><path class="yrr0stbvk"/>`,
		"fallback": "uix-sharp:grease-tub",
	});
}

export default Component;
