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
		"content": `<style>.e6olv-hqu {
  d: path("M6 10h6a3.5 3.5 0 0 1 3.5 3.5v3A3.5 3.5 0 0 1 12 20H6a3.5 3.5 0 0 1-3.5-3.5v-3A3.5 3.5 0 0 1 6 10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vcli-acec {
  d: path("M6.75 15a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m9.656-8.381a3.5 3.5 0 0 1 2.475 2.475m-1.763-5.131a6.25 6.25 0 0 1 4.419 4.419");
}
</style><g class="hntgybcog"><path class="e6olv-hqu"/><path class="vcli-acec"/></g>`,
		"fallback": "uix:camera-wireless",
	});
}

export default Component;
