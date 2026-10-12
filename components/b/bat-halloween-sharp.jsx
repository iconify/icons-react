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
		"content": `<style>.f5ko51b3m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3.05a3.75 3.75 0 1 0 2.75 4.6a3 3 0 0 1-2.75-4.6Zm3.5 10.7l1-1.5l.5 1.5c1.75-1 4.5-1.5 7.75-.5l-1.75 1.4v2.6l-1.714-1.286L16.25 17.5l-1.406-.937L14 18.25l-2 2l-2-2l-.844-1.687l-1.406.937l-1.536-1.536L4.5 17.25v-2.6l-1.75-1.4c3.25-1 6-.5 7.75.5l.5-1.5Z");
}
</style><path class="f5ko51b3m"/>`,
		"fallback": "iconoven:bat-halloween-sharp",
	});
}

export default Component;
