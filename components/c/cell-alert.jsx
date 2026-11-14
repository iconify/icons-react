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
		"content": `<style>.d6blep9hp {
  d: path("m7 21l3.5-8.5L14 21M8.5 10a2.83 2.83 0 0 1 4 0m-6-2a5.66 5.66 0 0 1 8 0");
}

.fyl0zl2pi {
  d: path("M4.5 6a8.49 8.49 0 0 1 12 0m1.5 8.75v3.5M18 21h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d6blep9hp"/><path class="fyl0zl2pi"/></g>`,
		"fallback": "uix-sharp:cell-alert",
	});
}

export default Component;
