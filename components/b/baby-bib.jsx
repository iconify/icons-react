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
		"content": `<style>.uob_zbb1k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7c-2.5 6-1 14 7 14s9.5-8 7-14h-3a4 4 0 0 1-8 0Zm0 0c0-5 14-5 14 0");
}
</style><path class="uob_zbb1k"/>`,
		"fallback": "uix-sharp:baby-bib",
	});
}

export default Component;
