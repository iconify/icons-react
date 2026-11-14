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
		"content": `<style>.wmrk2bboq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h19v7h-19Zm0 3.5h19m-16-6.25a6.5 6.5 0 0 1 13 0ZM12 3v1.75");
}
</style><path class="wmrk2bboq"/>`,
		"fallback": "uix-sharp:hot-food-counter",
	});
}

export default Component;
