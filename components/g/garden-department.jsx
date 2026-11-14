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
		"content": `<style>.iwgs1eo3b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 10h10v9.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 5 19.5Zm10 7l4.5-7m-1.25-1.5l3 2.5M5 12c-2.5 0-2.5 5.5 0 5.5M7 10c0-3.5 6-3.5 6 0");
}
</style><path class="iwgs1eo3b"/>`,
		"fallback": "uix-sharp:garden-department",
	});
}

export default Component;
