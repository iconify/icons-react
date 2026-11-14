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
		"content": `<style>.l_-rc1bnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5h13l-3 4.5h-7Zm3 4.5v9h7V7M10 16v5.5h4V16");
}
</style><path class="l_-rc1bnc"/>`,
		"fallback": "uix-sharp:eyepiece",
	});
}

export default Component;
