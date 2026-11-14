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
		"content": `<style>.chx4f9j9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.5L15 4q1.5-1.5 3-.5M6 20L18.5 7.5Q20 6 21.5 7");
}
</style><path class="chx4f9j9a"/>`,
		"fallback": "uix-sharp:cross-country-skis",
	});
}

export default Component;
