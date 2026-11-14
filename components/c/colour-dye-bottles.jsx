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
		"content": `<style>.tar1wkato {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3h3.5v3.5L10 9v11.5H3V9l1.75-2.5Zm10.5 4h3.5v3l1.75 2v8.5h-7V12l1.75-2ZM3 14h7m3.5 1.5h7");
}
</style><path class="tar1wkato"/>`,
		"fallback": "uix-sharp:colour-dye-bottles",
	});
}

export default Component;
