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
		"content": `<style>.i-wsqbc7f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3l2 2.75l3.25-1v3.5l3.25 1l-2 2.75l2 2.75l-3.25 1v3.5l-3.25-1L12 21l-2-2.75l-3.25 1v-3.5l-3.25-1l2-2.75l-2-2.75l3.25-1v-3.5l3.25 1Zm-2.5 9h.01m4.99 0h.01");
}
</style><path class="i-wsqbc7f"/>`,
		"fallback": "uix-sharp:dust-bunny",
	});
}

export default Component;
