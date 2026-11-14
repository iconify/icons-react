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
		"content": `<style>.avl6hxb2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5V3h3m4 0h5m4 0h3v3.5m0 3.5v4m0 3.5V21h-3m-4 0h-5m-4 0h-3v-3.5m0-3.5v-4M12 6l6.5 11.5h-13Zm0 4.25V13m0 2.25h.01");
}
</style><path class="avl6hxb2r"/>`,
		"fallback": "uix-sharp:hazard-zone",
	});
}

export default Component;
