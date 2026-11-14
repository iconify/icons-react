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
		"content": `<style>.e9502mufp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3h6v18.5H9ZM2.5 7H9m6 0h6.5M12 3v6.5M9 13h6");
}
</style><path class="e9502mufp"/>`,
		"fallback": "uix-sharp:clothes-peg",
	});
}

export default Component;
