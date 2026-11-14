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
		"content": `<style>.n-lfcacfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 12.5l3-3l3 5l3-6l3 7l3-5.5l4 3m-19-8.5H5m2.75 0h2.5m2.75 0h2.5m2.75 0h3.25m-19 15H5m2.75 0h2.5m2.75 0h2.5m2.75 0h3.25");
}
</style><path class="n-lfcacfe"/>`,
		"fallback": "uix-sharp:chart-control",
	});
}

export default Component;
