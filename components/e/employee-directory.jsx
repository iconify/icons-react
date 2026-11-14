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
		"content": `<style>.c1_e07b5s {
  d: path("M9.75 9a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM8.5 16.5a3.5 3.5 0 0 1 7 0M2.5 8H5m-2.5 4H5m-2.5 4H5");
}

.h4f8xqbrj {
  d: path("M5 3h14v18H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h4f8xqbrj"/><path class="c1_e07b5s"/></g>`,
		"fallback": "uix-sharp:employee-directory",
	});
}

export default Component;
