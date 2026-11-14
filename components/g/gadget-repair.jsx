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
		"content": `<style>.gwfjiqb9n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 12.6V2.5h7.2m4.8 11.3v7.7H8.2m9.55-17.25a3.5 3.5 0 0 0-4.5 4.5L5 17a1.5 1.5 0 0 0 2 2l8.25-8.25a3.5 3.5 0 0 0 4.5-4.5l-1.75 2L15.75 6Z");
}
</style><path class="gwfjiqb9n"/>`,
		"fallback": "uix-sharp:gadget-repair",
	});
}

export default Component;
