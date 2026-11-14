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
		"content": `<style>.jh--vwb6r {
  d: path("M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vh2umcccn {
  d: path("M9.75 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM2.5 2.5v4a1 1 0 0 0 2 0v-4m-1 5v14m17.75 0v-19c-1.75 1.5-1.75 6-1.25 9h1.25");
}
</style><g class="ulnmmdpxh"><path class="jh--vwb6r"/><path class="vh2umcccn"/></g>`,
		"fallback": "uix-sharp:holiday-dinner",
	});
}

export default Component;
