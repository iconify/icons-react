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
		"content": `<style>.mpun8bbbj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10.5h10.5l7-3.5v10l-7-3.5h-6a2.75 2.75 0 0 0 0 5.5H12m-6-8.5v-5m3 5v-5m3 5v-5");
}
</style><path class="mpun8bbbj"/>`,
		"fallback": "uix-sharp:cornet",
	});
}

export default Component;
