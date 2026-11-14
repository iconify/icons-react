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
		"content": `<style>.h_0vejb0e {
  d: path("m12 15.5l4.75-4.75l4.75 4.75v6H12Z");
}

.rylwk1z8m {
  d: path("M2.5 2.5h6v6h-6Zm6 6l5.25 5.25m-3 0h3v-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rylwk1z8m"/><path class="h_0vejb0e"/></g>`,
		"fallback": "uix-sharp:drop-ship-order",
	});
}

export default Component;
