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
		"content": `<style>.c5ddjxb-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.5h13V20h-13Zm13 2.5l6-2.5v9l-6-2.5Zm-13-6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm7 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}
</style><path class="c5ddjxb-c"/>`,
		"fallback": "uix-sharp:film-camera-reels",
	});
}

export default Component;
