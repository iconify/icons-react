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
		"content": `<style>.ix07hbygx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 15.5h13a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm1-6h9v6h-9Zm6.5 0l4-5l3.5 4m-2 3l2-3l3 1.5");
}
</style><path class="ix07hbygx"/>`,
		"fallback": "uix-sharp:bomb-disposal-robot",
	});
}

export default Component;
