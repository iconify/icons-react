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
		"content": `<style>.ekgt1dbey {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18c3-3 6-3 9 0s6 3 9 0m-9-3V5M5 9a7 7 0 0 1 14 0Z");
}
</style><path class="ekgt1dbey"/>`,
		"fallback": "uix-sharp:holiday-rental",
	});
}

export default Component;
