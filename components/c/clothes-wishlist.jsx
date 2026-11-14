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
		"content": `<style>.cixudtbof {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 4.25A2.25 2.25 0 1 1 12 6.5m0 0l9 4.75H3Zm0 15L8 18a2.5 2.5 0 0 1 4-3a2.5 2.5 0 0 1 4 3Z");
}
</style><path class="cixudtbof"/>`,
		"fallback": "uix-sharp:clothes-wishlist",
	});
}

export default Component;
