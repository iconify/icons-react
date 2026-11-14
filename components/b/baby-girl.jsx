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
		"content": `<style>.q5a0a_dtb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 14.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0Zm1-12l12 4v-4l-12 4Zm6 2h.01M9.5 15h.01m4.99 0h.01");
}
</style><path class="q5a0a_dtb"/>`,
		"fallback": "uix-sharp:baby-girl",
	});
}

export default Component;
