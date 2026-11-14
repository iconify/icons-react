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
		"content": `<style>.pmk8pl8ye {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 20l9.5-3.5m-9.5 0L12 20m-4.75-6.5c-2-2.25 2-4.25 0-6.75c-1-1.25-.25-3.25 1-4.25m9.75 11c1.5 1.75 3 3.25 3 5a3 3 0 0 1-6 0c0-1.75 1.5-3.25 3-5Z");
}
</style><path class="pmk8pl8ye"/>`,
		"fallback": "uix-sharp:campfire-out",
	});
}

export default Component;
