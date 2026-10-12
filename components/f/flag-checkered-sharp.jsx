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
		"content": `<style>.w6xvawe5j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4h7.5v4.5H5zm7.5 4.5H20V13h-7.5zm0-4.5H20v4.5M5 13h7.5M5 3v1m0 4.5V21");
}
</style><path class="w6xvawe5j"/>`,
		"fallback": "iconoven:flag-checkered-sharp",
	});
}

export default Component;
