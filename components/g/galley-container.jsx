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
		"content": `<style>.fu1wyubwl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 18.5v-12A3.5 3.5 0 0 1 8 3h6a3.5 3.5 0 0 1 3.5 3.5v12Zm0-11h13m0 3h2.25V15H17.5m-10 6.25h.01m6.99 0h.01");
}
</style><path class="fu1wyubwl"/>`,
		"fallback": "uix-sharp:galley-container",
	});
}

export default Component;
