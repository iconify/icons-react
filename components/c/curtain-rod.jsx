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
		"content": `<style>.siezp6b-f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 4.5h15.5m-17.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm17.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM5 4.5v16h4.25Q7.5 13 10.5 4.5m8.5 0v16h-4.25q1.75-7.5-1.25-16");
}
</style><path class="siezp6b-f"/>`,
		"fallback": "uix-sharp:curtain-rod",
	});
}

export default Component;
