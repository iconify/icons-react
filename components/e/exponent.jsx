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
		"content": `<style>.okc0tdvrk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 10.5l8 9m0-9l-8 9M15 6c0-1.1.9-2 2-2s2 .9 2 2c0 1.75-4 2.5-4 4.75h4.5");
}
</style><path class="okc0tdvrk"/>`,
		"fallback": "uix-sharp:exponent",
	});
}

export default Component;
