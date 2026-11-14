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
		"content": `<style>.eofi8xb7m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 11h12M5 11L4 3.5M5 11l12 9.5m0-9.5L5 20.5m-1-17h8.5");
}
</style><path class="eofi8xb7m"/>`,
		"fallback": "uix-sharp:fishing-chair",
	});
}

export default Component;
