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
		"content": `<style>.lv95pubyb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 13l1.25-8h7.5L17 13Zm0 0h10l4 4c-4 1.75-14 1.75-18 0Z");
}
</style><path class="lv95pubyb"/>`,
		"fallback": "uix-sharp:bucket-hat",
	});
}

export default Component;
