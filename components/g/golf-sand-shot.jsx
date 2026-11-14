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
		"content": `<style>.qomucxail {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.5c3.5 5 15.5 5 19 0m-13-9a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm-1.5 6l-2-3m12 3l2-3m-7 4h.01");
}
</style><path class="qomucxail"/>`,
		"fallback": "uix-sharp:golf-sand-shot",
	});
}

export default Component;
