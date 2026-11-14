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
		"content": `<style>.pd2kwebiy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3v18.5m0-17C9 2 12 7 19 4.5v9C12 16 9 11 5 13.5");
}
</style><path class="pd2kwebiy"/>`,
		"fallback": "uix-sharp:flag-waving",
	});
}

export default Component;
