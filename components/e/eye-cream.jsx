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
		"content": `<style>.gd9es_q8q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5h13v3.75h-13Zm9 16h-10V11h15v2.7m-3 4.8q3.5-4 7 0q-3.5 4-7 0Zm3.5 0h.01");
}
</style><path class="gd9es_q8q"/>`,
		"fallback": "uix-sharp:eye-cream",
	});
}

export default Component;
