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
		"content": `<style>.c3r0iwb1n {
  d: path("M2.5 7.5h19V21h-19Zm5.5-5l4 5l4-5");
}

.n_y0e5bmg {
  d: path("M8.5 12.5L12 16l3.5-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c3r0iwb1n"/><path class="n_y0e5bmg"/></g>`,
		"fallback": "uix-sharp:channel-down",
	});
}

export default Component;
