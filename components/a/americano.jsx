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
		"content": `<style>.w68_vrbtz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 9.5h10V19a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2Zm10 2h1a2.5 2.5 0 0 1 0 5h-1M3.5 21h17M9.5 3Q8 4.75 9.5 6.5m4-3.5q-1.5 1.75 0 3.5");
}
</style><path class="w68_vrbtz"/>`,
		"fallback": "uix-sharp:americano",
	});
}

export default Component;
