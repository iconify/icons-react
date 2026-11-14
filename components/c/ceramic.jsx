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
		"content": `<style>.zicn-p0yf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 2.5v4c-4.75 1.5-6 5-5.5 8s2.25 5 3.75 7h7c1.5-2 3.25-4 3.75-7s-.75-6.5-5.5-8v-4m-5.25 0h7");
}
</style><path class="zicn-p0yf"/>`,
		"fallback": "uix-sharp:ceramic",
	});
}

export default Component;
