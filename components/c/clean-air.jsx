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
		"content": `<style>.hr1q7kxca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 14C7 7 12 3 21 2.5C21 10 16 14 7 14Zm-4.5 7h13a2.25 2.25 0 1 0-2.25-2.25M11.5 10L16 6.5");
}
</style><path class="hr1q7kxca"/>`,
		"fallback": "uix-sharp:clean-air",
	});
}

export default Component;
