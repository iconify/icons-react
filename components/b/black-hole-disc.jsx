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
		"content": `<style>.jqygv0b6j {
  fill: currentColor;
  d: path("M8.25 10.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}

.td0ci9bvr {
  d: path("M5.5 10a9.5 4 0 1 0 13 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jqygv0b6j"/><path class="td0ci9bvr"/></g>`,
		"fallback": "uix-sharp:black-hole-disc",
	});
}

export default Component;
