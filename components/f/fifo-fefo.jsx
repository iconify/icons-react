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
		"content": `<style>.ytdirnbwg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5H7v6H2.5Zm7.25 0h4.5v6h-4.5Zm7.25 0h4.5v6H17ZM21.5 17h-19m3-3l-3 3l3 3");
}
</style><path class="ytdirnbwg"/>`,
		"fallback": "uix-sharp:fifo-fefo",
	});
}

export default Component;
