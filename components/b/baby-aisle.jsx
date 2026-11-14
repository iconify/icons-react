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
		"content": `<style>.hf6obkxfl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 8.5c0-2.25 1.5-3 1.75-4.5a1.25 1.25 0 0 1 2.5 0C13.5 5.5 15 6.25 15 8.5m-8.5 0h11v3h-11Zm1 3v8a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-8");
}
</style><path class="hf6obkxfl"/>`,
		"fallback": "uix-sharp:baby-aisle",
	});
}

export default Component;
