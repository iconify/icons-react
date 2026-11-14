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
		"content": `<style>.suh_4mbhs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.092 17.755L17 10h-5.5L13 2.5L5 13h5.5L9 20.5l1.849-2.427M14.75 18l2 2L21 15.75");
}
</style><path class="suh_4mbhs"/>`,
		"fallback": "uix-sharp:energy-efficiency",
	});
}

export default Component;
