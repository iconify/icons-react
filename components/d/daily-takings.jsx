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
		"content": `<style>.z6zmhxmpb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h7.5V7H4ZM7.75 7v2m3.951 5.5H2.5L4 9h16l.605 2.219M11.7 21.5H2.5v-7h9.2M6.5 18h4m4-2.75h7v6.5h-7Zm0 2.5h7m-5-3.75v1.75m3-1.75v1.75");
}
</style><path class="z6zmhxmpb"/>`,
		"fallback": "uix-sharp:daily-takings",
	});
}

export default Component;
