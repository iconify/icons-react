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
		"content": `<style>.ergf9lcrb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11 14.25l-7-5.5l4-5.5l7.25 5.25M3 21h18m-10 0q5-7.5 10 0m-7-7.5h.01m3.49-1h.01");
}
</style><path class="ergf9lcrb"/>`,
		"fallback": "uix-sharp:holi-color-powder",
	});
}

export default Component;
