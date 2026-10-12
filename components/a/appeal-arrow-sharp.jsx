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
		"content": `<style>.b8-8l7bbe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.25V17h6v-3.5h6V10h6.5v11.25H2.75zM4 12.5l8-8m-4.5 0H12V9");
}
</style><path class="b8-8l7bbe"/>`,
		"fallback": "iconoven:appeal-arrow-sharp",
	});
}

export default Component;
