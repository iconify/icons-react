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
		"content": `<style>.f9cdssb3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 6l-4 6l4 6m3-12l4 6l-4 6m11.5-6H17m2.5-2.5L17 12l2.5 2.5");
}
</style><path class="f9cdssb3w"/>`,
		"fallback": "uix-sharp:contract-call",
	});
}

export default Component;
