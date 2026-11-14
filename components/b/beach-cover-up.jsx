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
		"content": `<style>.l7ply5x8a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3L12 9l3.5-6l6 4v6L17 15v6H7v-6l-4.5-2V7ZM12 9v12m-5-6h10");
}
</style><path class="l7ply5x8a"/>`,
		"fallback": "uix-sharp:beach-cover-up",
	});
}

export default Component;
