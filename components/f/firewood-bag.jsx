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
		"content": `<style>.ieivwwlmv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10.5h16c2 3.5 2 11-3 11H7c-5 0-5-7.5-3-11Zm.75 0V7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3.5m2.75 0V4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6.5m2.75 0V7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3.5");
}
</style><path class="ieivwwlmv"/>`,
		"fallback": "uix-sharp:firewood-bag",
	});
}

export default Component;
