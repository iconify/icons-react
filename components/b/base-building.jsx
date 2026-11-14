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
		"content": `<style>.bmd4x5wfl {
  d: path("M10.5 16v-3.5h3V16");
}

.hlabr2b0y {
  d: path("M7.5 16V9.5L12 4l4.5 5.5V16m-14 0h19v4.5h-19Zm5 0v4.5m9-4.5v4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hlabr2b0y"/><path class="bmd4x5wfl"/></g>`,
		"fallback": "uix-sharp:base-building",
	});
}

export default Component;
