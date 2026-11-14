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
		"content": `<style>.hga8r15nj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3.5V19M9 3.5l8 3l-8 3Zm-5.5 17c2.5-2 8.5-2 11 0");
}
</style><path class="hga8r15nj"/>`,
		"fallback": "uix-sharp:golf-course",
	});
}

export default Component;
