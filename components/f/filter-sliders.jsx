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
		"content": `<style>.ikddgqr_e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6h9m-6 6H9m.5 6h5m-1-12a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm5 0h2.5m0-6h3");
}
</style><path class="ikddgqr_e"/>`,
		"fallback": "uix-sharp:filter-sliders",
	});
}

export default Component;
