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
		"content": `<style>.g5sm_fetc {
  d: path("M8.25 13.75a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uurl-acat {
  d: path("M2.5 7h19v13.5h-19ZM8 7l1.5-3.5h5L16 7");
}
</style><g class="ulnmmdpxh"><path class="uurl-acat"/><path class="g5sm_fetc"/></g>`,
		"fallback": "uix-sharp:camera-body",
	});
}

export default Component;
