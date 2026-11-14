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
		"content": `<style>.ng_as2qor {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14a9 9 0 0 1 3-6.75m2.25-1.5a9 9 0 0 1 7.5 0M18 7.25A9 9 0 0 1 21 14m-9 5.5l-4.25-4.25a2.75 2.75 0 0 1 4.25-3.5a2.75 2.75 0 0 1 4.25 3.5Z");
}
</style><path class="ng_as2qor"/>`,
		"fallback": "uix:heart-rate-zone",
	});
}

export default Component;
