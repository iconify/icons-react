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
		"content": `<style>.qltw0-tqv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 16h16.5v5.25H3.75v-2.5ZM8.5 9.75h7l-.015 2.8l-2.735.6V16h-1.5v-3.1l-2.548-.551zm3.5 0v-5m0 0c-3.5-2.5-8.25-1-8.25 5v3m8.25-8c3.5-2.5 8.25-1 8.25 5v3");
}
</style><path class="qltw0-tqv"/>`,
		"fallback": "iconoven:fountain-sharp",
	});
}

export default Component;
