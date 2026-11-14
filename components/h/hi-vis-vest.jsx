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
		"content": `<style>.w2bkjwd7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.5L9 8v12.5h6V8l2-4.5L21 6v6h-4v8.5H7V12H3V6Z");
}
</style><path class="w2bkjwd7s"/>`,
		"fallback": "uix-sharp:hi-vis-vest",
	});
}

export default Component;
