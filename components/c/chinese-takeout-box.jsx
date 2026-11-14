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
		"content": `<style>.vs8532b3p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9h14l-2 11.5H7Zm0 0l2.5-3.5h9L19 9M8.5 5.5c0-2.75 7-2.75 7 0m-3.5 0V9");
}
</style><path class="vs8532b3p"/>`,
		"fallback": "uix-sharp:chinese-takeout-box",
	});
}

export default Component;
