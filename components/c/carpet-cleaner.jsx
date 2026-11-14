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
		"content": `<style>.rjh781vht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15H17v3.5H2.5Zm9.5 0l5-10.75M14.75 3l4.5 2.5M2.5 21.5h19");
}
</style><path class="rjh781vht"/>`,
		"fallback": "uix-sharp:carpet-cleaner",
	});
}

export default Component;
