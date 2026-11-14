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
		"content": `<style>.exucg5r4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 6.5v-3H4v17h10v-3M8 12h12.5m-4-4l4 4l-4 4");
}
</style><path class="exucg5r4a"/>`,
		"fallback": "uix-sharp:evacuation-order",
	});
}

export default Component;
