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
		"content": `<style>.ocdn1ub0b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l3.75 4.75h-7.5Zm0 4.75L15.75 12h-7.5ZM12 12v1.5m-4 4a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}
</style><path class="ocdn1ub0b"/>`,
		"fallback": "uix-sharp:cardinal-mark-north",
	});
}

export default Component;
