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
		"content": `<style>.cekbdq25b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 8.5h3V20H5ZM10.5 5h3v15h-3ZM16 8.5h3V20h-3Zm-11 0l1.5-3l1.5 3M10.5 5L12 2.5L13.5 5M16 8.5l1.5-3l1.5 3");
}
</style><path class="cekbdq25b"/>`,
		"fallback": "uix-sharp:crayons",
	});
}

export default Component;
