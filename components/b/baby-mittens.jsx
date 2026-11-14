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
		"content": `<style>.s45efrb_y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 16.5v-10a2.5 2.5 0 0 0-5 0v3c-1.5-.25-2.25.75-2.25 2c0 1.5 1.25 2.75 2.25 3.5v1.5m-.5 0h6V20h-6Zm10 0v-10a2.5 2.5 0 0 1 5 0v3c1.5-.25 2.25.75 2.25 2c0 1.5-1.25 2.75-2.25 3.5v1.5m-5.5 0h6V20h-6Zm-3.5 1.75q1.75 2 3.5 0");
}
</style><path class="s45efrb_y"/>`,
		"fallback": "uix-sharp:baby-mittens",
	});
}

export default Component;
