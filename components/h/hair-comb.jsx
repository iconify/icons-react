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
		"content": `<style>.x8487mb1s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6h18v4.5H3Zm1.5 4.5v7m3-7v7m3-7v7m3-7v7m3-7v7m3-7v7");
}
</style><path class="x8487mb1s"/>`,
		"fallback": "uix-sharp:hair-comb",
	});
}

export default Component;
