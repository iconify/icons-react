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
		"content": `<style>.b059qfbvn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5L6 12m7.8 3H5v-3h9v2.8m-7.5.2l-1 6m7-6l.119 1.194M14.75 18l2 2L21 15.75");
}
</style><path class="b059qfbvn"/>`,
		"fallback": "uix-sharp:class-full",
	});
}

export default Component;
