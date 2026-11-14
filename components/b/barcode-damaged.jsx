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
		"content": `<style>.ebs5c5bno {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v5.7M7 3v4.9M10.5 3v5.9M14 3v4.9M17.5 3v5.9M21 3v4.9M4.25 14.7V21m3.5-5.8V21m3.5-5.8V21m3.5-5.8V21m3.5-5.8V21M2.5 12.5l3.5-2L9.5 13l3.5-2.5l3.5 2.5l3.5-2.5l1.5 1");
}
</style><path class="ebs5c5bno"/>`,
		"fallback": "uix:barcode-damaged",
	});
}

export default Component;
