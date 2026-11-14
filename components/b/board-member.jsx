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
		"content": `<style>.grraostgy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM5 15.5c0-2.25 3.25-3.25 7-3.25s7 1 7 3.25m-13 6l1-3.25h10l1 3.25Z");
}
</style><path class="grraostgy"/>`,
		"fallback": "uix-sharp:board-member",
	});
}

export default Component;
