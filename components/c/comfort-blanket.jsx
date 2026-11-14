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
		"content": `<style>.ynwm4oqsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21 4.5H7A3.75 3.75 0 0 0 7 12a3.75 3.75 0 0 0 0 7.5h14ZM7 12h14m-7-7.5V12m3-7.5V12");
}
</style><path class="ynwm4oqsi"/>`,
		"fallback": "uix-sharp:comfort-blanket",
	});
}

export default Component;
