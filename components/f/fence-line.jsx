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
		"content": `<style>.m3it7mb5j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21V7l2-2.5L7 7v14Zm7 0V7l2-2.5L14 7v14Zm7 0V7l2-2.5L21 7v14ZM7 10.5h3m4 0h3m-10 6h3m4 0h3");
}
</style><path class="m3it7mb5j"/>`,
		"fallback": "uix-sharp:fence-line",
	});
}

export default Component;
