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
		"content": `<style>.ckirb2bmp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5.5h10.5a2 2 0 0 1 2 2V10a2 2 0 0 1-2 2h-4L10 20H6l1.5-8H5a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2Zm15 0l1.5-.75m-1.5 4h1.75M20 12l1.5.75");
}
</style><path class="ckirb2bmp"/>`,
		"fallback": "uix-sharp:barcode-scanner",
	});
}

export default Component;
