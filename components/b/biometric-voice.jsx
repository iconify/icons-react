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
		"content": `<style>.nq1vqg1ob {
  d: path("M10 3h4v9h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.us5pxeagv {
  d: path("M7 10a5 5 0 0 0 10 0m-5 5v5m-3 0h6M4.5 6.5q-2 3.5 0 7m15-7q2 3.5 0 7");
}
</style><g class="ulnmmdpxh"><path class="nq1vqg1ob"/><path class="us5pxeagv"/></g>`,
		"fallback": "uix-sharp:biometric-voice",
	});
}

export default Component;
