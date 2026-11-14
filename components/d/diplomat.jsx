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
		"content": `<style>.tdqxtsqtz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h18v12H3Zm5 0V6.5A1.5 1.5 0 0 1 9.5 5h2A1.5 1.5 0 0 1 13 6.5V9M3 14h18m-4.5-5V2.5l4 2l-4 2");
}
</style><path class="tdqxtsqtz"/>`,
		"fallback": "uix-sharp:diplomat",
	});
}

export default Component;
