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
		"content": `<style>.wv9sdgb1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 8.75h6.5v6.5h-6.5ZM2.5 6H6V2.5m12 0V6h3.5m0 12H18v3.5m-12 0V18H2.5");
}
</style><path class="wv9sdgb1n"/>`,
		"fallback": "uix-sharp:crop-marks",
	});
}

export default Component;
