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
		"content": `<style>.t5h7bgbbw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.5h19v6h-19Zm3-2v10m13-10v10M10 2.5C8.5 4.25 11.5 6.25 10 8m4-5.5c-1.5 1.75 1.5 3.75 0 5.5");
}
</style><path class="t5h7bgbbw"/>`,
		"fallback": "uix-sharp:heat-network-pipe",
	});
}

export default Component;
