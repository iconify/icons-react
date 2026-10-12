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
		"content": `<style>.su0h_pb4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 12.25h16.5a8.25 3.5 0 0 1-16.5 0Zm8.25 3.5v5.5m-3.5 0h7m-7-9V10m7 2.25V10m-7-1.75V6.083L10 4.25m5.5 4V6.083L14 4.25");
}
</style><path class="su0h_pb4t"/>`,
		"fallback": "iconoven:eye-wash-sharp",
	});
}

export default Component;
