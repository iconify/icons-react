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
		"content": `<style>.n7v6ldbyv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5V10l6-5.25M9 7l3 7.5L15 7m0-2.25L21 10v11.5M9 2.5l3 2.25l3-2.25V7l-3-2.25L9 7Zm3 16h.01");
}
</style><path class="n7v6ldbyv"/>`,
		"fallback": "uix-sharp:best-man",
	});
}

export default Component;
