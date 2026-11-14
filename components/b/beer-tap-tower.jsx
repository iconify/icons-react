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
		"content": `<style>.hr52o9b6a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8.5h18V12H3Zm7.5 3.5h3v9h-3Zm-6-9.5h3l-.5 6H5Zm6 0h3l-.5 6h-2Zm6 0h3l-.5 6h-2ZM6 21h12");
}
</style><path class="hr52o9b6a"/>`,
		"fallback": "uix-sharp:beer-tap-tower",
	});
}

export default Component;
