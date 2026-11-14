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
		"content": `<style>.zyjn6l3lh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 10.5h7v6h-7Zm1.5 0v-1a2 2 0 0 1 4 0v1m-11.5 3H6m-2-2l2 2l-2 2m14-2h3.5m-2-2l2 2l-2 2");
}
</style><path class="zyjn6l3lh"/>`,
		"fallback": "uix-sharp:encryption-in-transit",
	});
}

export default Component;
