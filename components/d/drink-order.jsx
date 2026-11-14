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
		"content": `<style>.v4clxwbea {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5h11v3H3Zm9.248 12.771L12 20.5H5l-1-13h9l-.591 7.677M9.5 4.5l2-2.5M18 15v6m-3-3h6");
}
</style><path class="v4clxwbea"/>`,
		"fallback": "uix-sharp:drink-order",
	});
}

export default Component;
