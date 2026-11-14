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
		"content": `<style>.qtj-d-esq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3h13v9h-13Zm0 9L3 15.5h18L18.5 12m-16 6.25h19v3.25h-19ZM12 15.5v2.75");
}
</style><path class="qtj-d-esq"/>`,
		"fallback": "uix-sharp:docking-station",
	});
}

export default Component;
