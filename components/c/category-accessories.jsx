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
		"content": `<style>.bs0snybxl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.5h10.5v13H3Zm10.5 4H19l2.5 2.5l-2.5 2.5h-5.5M3 12h7.5m6.5 0h.01");
}
</style><path class="bs0snybxl"/>`,
		"fallback": "uix-sharp:category-accessories",
	});
}

export default Component;
