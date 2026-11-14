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
		"content": `<style>.eaoe08bec {
  d: path("M5 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.o7uukd_0a {
  d: path("M2.5 8.5h12v9h-12Zm12 2.5h4l3 3.5v3h-7m-6-9v-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o7uukd_0a"/><path class="eaoe08bec"/></g>`,
		"fallback": "uix-sharp:command-vehicle",
	});
}

export default Component;
