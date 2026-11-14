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
		"content": `<style>.xxb2b-bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l4 3.75L12 10L8 6.25Zm0 7.5v2m-5 9l1.75-9h6.5L17 21ZM8 6.25h8M8 16.5h8");
}
</style><path class="xxb2b-bbs"/>`,
		"fallback": "uix-sharp:cardinal-mark-east",
	});
}

export default Component;
