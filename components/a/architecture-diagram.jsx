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
		"content": `<style>.x78xm4kfq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h8v6h-8Zm11 6.5h8v6h-8Zm-11 6.5h8v6h-8Zm8-10h7V9m0 6v3.5h-7");
}
</style><path class="x78xm4kfq"/>`,
		"fallback": "uix-sharp:architecture-diagram",
	});
}

export default Component;
