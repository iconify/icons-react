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
		"content": `<style>.n6jx3vbco {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 5.5h13l-3 5.5h-7ZM5 11h14v10.5H5Zm7-5.5v-3h5M9.5 16.25h5");
}
</style><path class="n6jx3vbco"/>`,
		"fallback": "uix-sharp:coffee-grinder",
	});
}

export default Component;
