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
		"content": `<style>.btmj61v3q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 15h15c-1.25-1-2-2.5-2-5a5.5 5.5 0 0 0-11 0c0 2.5-.75 4-2 5ZM12 2.5v2m-1.75 15a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><path class="btmj61v3q"/>`,
		"fallback": "uix-sharp:fire-alarm-bell",
	});
}

export default Component;
