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
		"content": `<style>.k369k1b_r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 20.5l-3.25-6L5.5 10l-2-6m5.25 10.5l1-5.5M5.5 10l1.75-5.5m4.75 16l3.25-6L18.5 10l2-6m-5.25 10.5l-1-5.5m4.25 1l-1.75-5.5");
}
</style><path class="k369k1b_r"/>`,
		"fallback": "uix-sharp:antlers-pair",
	});
}

export default Component;
