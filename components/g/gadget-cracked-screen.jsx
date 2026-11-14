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
		"content": `<style>.trh2ghbkw {
  d: path("M6.5 2.5h11v19h-11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yoql2bbwg {
  d: path("m13.5 3l-2 5.5L14 12l-3.5 5.5");
}
</style><g class="ulnmmdpxh"><path class="trh2ghbkw"/><path class="yoql2bbwg"/></g>`,
		"fallback": "uix-sharp:gadget-cracked-screen",
	});
}

export default Component;
