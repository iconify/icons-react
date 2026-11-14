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
		"content": `<style>.jdddij8hz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3v18m0-7h15m-15-5.5h3m-3 11h3m7-8.5V3.5M11 7l3.5-3.5L18 7");
}
</style><path class="jdddij8hz"/>`,
		"fallback": "uix-sharp:flight-level",
	});
}

export default Component;
