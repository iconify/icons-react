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
		"content": `<style>.ngk0w_88e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21q3-7 1-12h6q-2 5 1 12Zm11 0q3-7 1-12h6q-2 5 1 12ZM4 6.25a1.75 1.75 0 0 1 2.5-2a1.75 1.75 0 0 1 2.5 2m6 0a1.75 1.75 0 0 1 2.5-2a1.75 1.75 0 0 1 2.5 2");
}
</style><path class="ngk0w_88e"/>`,
		"fallback": "uix-sharp:cooling-tower-plant",
	});
}

export default Component;
