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
		"content": `<style>.cnk8p_tyu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.386 16.371l8.485-8.485l4.243 4.243l-8.485 8.485ZM14 10q.75-1.75 2.25-2.25m1.75-3V3m1.25 3H21m-2-1l1.25-1.25M17 5l-1.25-1.25");
}
</style><path class="cnk8p_tyu"/>`,
		"fallback": "uix-sharp:firecracker",
	});
}

export default Component;
