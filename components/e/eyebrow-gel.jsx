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
		"content": `<style>.kdga1rbvr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.5 6h5v15.5h-5ZM5 15h5v6.5H5Zm2.5 0v-3.5l-2.25-1.25l4.5-1.5l-4.5-1.5l4.5-1.5l-4.5-1.5L7.5 3");
}
</style><path class="kdga1rbvr"/>`,
		"fallback": "uix-sharp:eyebrow-gel",
	});
}

export default Component;
