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
		"content": `<style>.srfnnybjs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 2.5V5c0 .5 1 1 2 1c3.793-.474 6.686 2.198 6.55 5.886m-7.607 6.961A10 10 0 0 1 9.5 18.75c-2-.25-3.5.5-4.75 2m3-18.25v4c0 2.5 1.75 4.25 4.25 4.25c2 0 3 1.25 2.25 3l-.028.047m-.355.446C12.585 15.5 9.791 15.5 8 15.5c-2 0-3.75.75-5 2.25M17.75 14s-3 3-3 4.75a3 3 0 0 0 6 0c0-1.75-3-4.75-3-4.75Z");
}
</style><path class="srfnnybjs"/>`,
		"fallback": "uix-sharp:antacid",
	});
}

export default Component;
