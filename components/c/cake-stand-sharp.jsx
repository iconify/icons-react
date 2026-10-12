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
		"content": `<style>.mlikcms7y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 5.25h12.5v8H5.75zm0 3.25h12.5m-15.5 4.75h18.5m-9.25 0v8m-3.75 0h7.5");
}
</style><path class="mlikcms7y"/>`,
		"fallback": "iconoven:cake-stand-sharp",
	});
}

export default Component;
