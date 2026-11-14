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
		"content": `<style>.s95no8xdk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h3v10H4Zm13 9.6V2.5h3v9.7M7 7.5h10M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="s95no8xdk"/>`,
		"fallback": "uix-sharp:deadlift-jack",
	});
}

export default Component;
