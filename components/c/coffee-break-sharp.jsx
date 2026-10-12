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
		"content": `<style>.n7fz5fbcu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 9.25h12v11.5h-12zm12 2.5h1.5a2.5 2.5 0 0 1 0 5h-1.5M8.25 13v4.25m3-4.25v4.25m-3.5-14l-1 1.5l1 1.5m4-3l-1 1.5l1 1.5");
}
</style><path class="n7fz5fbcu"/>`,
		"fallback": "iconoven:coffee-break-sharp",
	});
}

export default Component;
