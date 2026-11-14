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
		"content": `<style>.pyrhu-_3a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 17.5L6 12l5.5-5.5m6 11L12 12l5.5-5.5");
}
</style><path class="pyrhu-_3a"/>`,
		"fallback": "uix-sharp:chevrons-left",
	});
}

export default Component;
