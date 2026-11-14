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
		"content": `<style>.cwur0en5i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5h4v13h-4Zm4 5h3.25m-3.25 3h3.25M9.5 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}
</style><path class="cwur0en5i"/>`,
		"fallback": "uix-sharp:door-knob",
	});
}

export default Component;
