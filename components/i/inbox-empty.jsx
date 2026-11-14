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
		"content": `<style>.tz9dgcbqh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12H8l1.5 3h5l1.5-3h5.5v6.5A2.5 2.5 0 0 1 19 21H5a2.5 2.5 0 0 1-2.5-2.5ZM9 5.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm.75 3.5l4.5-7");
}
</style><path class="tz9dgcbqh"/>`,
		"fallback": "uix-sharp:inbox-empty",
	});
}

export default Component;
