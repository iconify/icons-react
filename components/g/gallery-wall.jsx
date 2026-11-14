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
		"content": `<style>.sxo8p-zwn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h10V11h-10Zm13 2.5h6v9h-6ZM6 14h6.5v6.5H6Z");
}
</style><path class="sxo8p-zwn"/>`,
		"fallback": "uix-sharp:gallery-wall",
	});
}

export default Component;
