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
		"content": `<style>.cb-rqvb3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6l-3 3zm13.75 7a2 2 0 0 1 2-2h.75a2 2 0 0 1 2 2v8.5L19 18h-.25a2 2 0 0 1-2-2Z");
}
</style><path class="cb-rqvb3y"/>`,
		"fallback": "uix-sharp:call-talk-ratio",
	});
}

export default Component;
