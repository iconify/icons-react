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
		"content": `<style>.tfroborgw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5.5h10.5a2 2 0 0 1 2 2V10a2 2 0 0 1-2 2h-4L10 20H6l1.5-8H5a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2m15 0l1.5-.75m-1.5 4h1.75M20 12l1.5.75");
}
</style><path class="tfroborgw"/>`,
		"fallback": "uix:barcode-scanner",
	});
}

export default Component;
