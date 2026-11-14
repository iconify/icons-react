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
		"content": `<style>.h8z--hs6u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.338 18.187l5.303-5.303l7.955-10.783l5.303 5.303l-10.783 7.955l-5.303 5.303Zm-.884-.884l4.243 4.243");
}
</style><path class="h8z--hs6u"/>`,
		"fallback": "uix-sharp:baseball-bat",
	});
}

export default Component;
