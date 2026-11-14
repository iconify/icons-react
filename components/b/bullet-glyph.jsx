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
		"content": `<style>.tr_bsnbas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm10 0h6.5");
}
</style><path class="tr_bsnbas"/>`,
		"fallback": "uix-sharp:bullet-glyph",
	});
}

export default Component;
