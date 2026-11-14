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
		"content": `<style>.d3a-c2b0r {
  d: path("M7.25 12h9.5L12 20.25Z");
}

.i7f20eovg {
  d: path("m12 3.75l9.5 16.5h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i7f20eovg"/><path class="d3a-c2b0r"/></g>`,
		"fallback": "uix-sharp:fractal",
	});
}

export default Component;
