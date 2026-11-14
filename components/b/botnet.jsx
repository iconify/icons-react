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
		"content": `<style>.c7uo53bin {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 12a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM2.5 2.5h5v5h-5Zm14 0h5v5h-5Zm-14 14h5v5h-5Zm14 0h5v5h-5Zm-9-9l2.25 2.25m4.5 0L16.5 7.5m-9 9l2.25-2.25m4.5 0l2.25 2.25");
}
</style><path class="c7uo53bin"/>`,
		"fallback": "uix-sharp:botnet",
	});
}

export default Component;
