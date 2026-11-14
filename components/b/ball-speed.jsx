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
		"content": `<style>.xntaxkhkm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0ZM4 7.5h4.75M2.5 12h4.25M4 16.5h4.75");
}
</style><path class="xntaxkhkm"/>`,
		"fallback": "uix-sharp:ball-speed",
	});
}

export default Component;
