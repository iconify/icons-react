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
		"content": `<style>.qrdfigi9r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h19v3h-19ZM5 11v6m14-6v6M8.25 11v3.5m7.5-3.5v3.5");
}
</style><path class="qrdfigi9r"/>`,
		"fallback": "uix-sharp:coffee-table",
	});
}

export default Component;
