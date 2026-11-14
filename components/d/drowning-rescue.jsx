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
		"content": `<style>.fgy--gbfb {
  d: path("M8.75 9.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm5.5-2.25L17 4.5M9.75 7.25L7 4.5m7.25 7.25L17 14.5m-7.25-2.75L7 14.5m-4.5 5q2.25-2.25 4.5 0t4.5 0t4.5 0t4.5 0");
}

.jqqdk0m7p {
  d: path("M5 9.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jqqdk0m7p"/><path class="fgy--gbfb"/></g>`,
		"fallback": "uix-sharp:drowning-rescue",
	});
}

export default Component;
