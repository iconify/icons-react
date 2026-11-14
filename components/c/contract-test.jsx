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
		"content": `<style>.lgesm1bzg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6h3v8h-3Zm16.3 8h-.3V6h3v6.3m-3-4.8H15l-3.5-2l-4 3.5a1.25 1.25 0 0 0 1.75 1.75L12 8.5m-6.5 4l4 2.5H12l6.5-3m-3.75 6l2 2L21 15.75");
}
</style><path class="lgesm1bzg"/>`,
		"fallback": "uix-sharp:contract-test",
	});
}

export default Component;
