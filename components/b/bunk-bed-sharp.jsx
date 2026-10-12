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
		"content": `<style>.ecakj6b9w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3v18M20 3v18M4 9h16M4 16h16M7 9V6.25h4.5V9M7 16v-2.75h4.5V16");
}
</style><path class="ecakj6b9w"/>`,
		"fallback": "iconoven:bunk-bed-sharp",
	});
}

export default Component;
