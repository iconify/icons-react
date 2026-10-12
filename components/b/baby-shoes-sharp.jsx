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
		"content": `<style>.lu74_xb7n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 7.25v-1.5h8v6l6.5 2l2.015.712l-.015 2.138v3.15H3.75v-1.5Zm8 4.5l-2.5 3.75M3.75 17h16.5");
}
</style><path class="lu74_xb7n"/>`,
		"fallback": "iconoven:baby-shoes-sharp",
	});
}

export default Component;
