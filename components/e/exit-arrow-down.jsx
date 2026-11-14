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
		"content": `<style>.xpch8ibxs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 16V4.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2V16m-7-9v14.5M8.5 18l3.5 3.5l3.5-3.5");
}
</style><path class="xpch8ibxs"/>`,
		"fallback": "uix-sharp:exit-arrow-down",
	});
}

export default Component;
