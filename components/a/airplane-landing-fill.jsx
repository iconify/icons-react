import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kfd-8dp4o {
  fill: currentColor;
  d: path("M256 216a8 8 0 0 1-8 8H104a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8m-24-24a8 8 0 0 0 8-8v-35.68a40.13 40.13 0 0 0-29.28-38.54l-60.84-17l-22.5-53.63a8 8 0 0 0-4.85-4.5l-5.47-1.82A16 16 0 0 0 96 48v29.39l-29.87-8.51l-10.61-29.37a8 8 0 0 0-5-4.87l-5.47-1.82A16 16 0 0 0 24 48v55.72a40.12 40.12 0 0 0 29.21 38.52l176.63 49.46a8 8 0 0 0 2.16.3");
}
</style><path class="kfd-8dp4o"/>`,
		"fallback": "ph:airplane-landing-fill",
	});
}

export default Component;
