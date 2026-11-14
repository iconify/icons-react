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
		"content": `<style>.v8atny4yz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5h9V10h-9ZM3 21.5h18M7.5 5.25h9m-4.5 7.5v6m-2.5-2.5l2.5 2.5l2.5-2.5");
}
</style><path class="v8atny4yz"/>`,
		"fallback": "uix-sharp:drop-test",
	});
}

export default Component;
