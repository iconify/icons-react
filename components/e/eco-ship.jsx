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
		"content": `<style>.wsx477_fr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.408 16H5.5l-3-6h19l-1.118 2.236M6 4.5h10V10H6Zm5 0V10m4 11.5c0-4.5 2-6.5 6.5-6.5c0 4.5-2 6.5-6.5 6.5Zm0 0l3.75-3.75");
}
</style><path class="wsx477_fr"/>`,
		"fallback": "uix-sharp:eco-ship",
	});
}

export default Component;
