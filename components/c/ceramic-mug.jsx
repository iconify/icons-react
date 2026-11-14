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
		"content": `<style>.hro631bab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4h12v12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm12 4h1.5a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H16");
}
</style><path class="hro631bab"/>`,
		"fallback": "uix-sharp:ceramic-mug",
	});
}

export default Component;
