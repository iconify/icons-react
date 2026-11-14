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
		"content": `<style>.vvrxcokma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h7v7h-7Zm10 3.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm-10 6.5h7v7h-7Zm10 0h7v7h-7Z");
}
</style><path class="vvrxcokma"/>`,
		"fallback": "uix-sharp:apps",
	});
}

export default Component;
