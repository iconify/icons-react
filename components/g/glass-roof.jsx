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
		"content": `<style>.b8ljpia5t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 13l4-8h15l-4 8Zm0 0v6h15v-6m-6-8l-4 8m9-8l-4 8m-8-4h15");
}
</style><path class="b8ljpia5t"/>`,
		"fallback": "uix-sharp:glass-roof",
	});
}

export default Component;
