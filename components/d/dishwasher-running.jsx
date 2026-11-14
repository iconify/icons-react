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
		"content": `<style>.benslaczj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h16v19H4ZM4 7h16M8 17.5h8m-4-3V11m-3 3.5l-1-3m7 3l1-3");
}
</style><path class="benslaczj"/>`,
		"fallback": "uix-sharp:dishwasher-running",
	});
}

export default Component;
