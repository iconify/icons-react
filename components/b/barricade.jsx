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
		"content": `<style>.e2fto6xjq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5h18v6H3Zm5.75 6l3-6m3 6l3-6M6 10.5L3.5 19M18 10.5l2.5 8.5");
}
</style><path class="e2fto6xjq"/>`,
		"fallback": "uix-sharp:barricade",
	});
}

export default Component;
