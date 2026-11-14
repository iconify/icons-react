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
		"content": `<style>.xqgl4vbcd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5v14m8-14v14m-8-7h8m8.75-3h-4l-.5 4.75c.5-.5 1.25-.75 2-.75c1.75 0 2.75 1.25 2.75 3s-1.25 3-2.75 3c-1 0-2-.5-2.5-1.25");
}
</style><path class="xqgl4vbcd"/>`,
		"fallback": "uix-sharp:heading-5",
	});
}

export default Component;
