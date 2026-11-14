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
		"content": `<style>.lnwy5tkil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7.5h10v9H7ZM2.5 12H7M4.75 9.75L7 12l-2.25 2.25M21.5 12H17m2.25-2.25L17 12l2.25 2.25");
}
</style><path class="lnwy5tkil"/>`,
		"fallback": "uix-sharp:gas-compressor",
	});
}

export default Component;
