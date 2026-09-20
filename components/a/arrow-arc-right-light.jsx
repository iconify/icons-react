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
		"content": `<style>.juv36bc3n {
  fill: currentColor;
  d: path("M238 88v64a6 6 0 0 1-6 6h-64a6 6 0 0 1 0-12h49.45l-25.8-25.63A90 90 0 0 0 38 184a6 6 0 0 1-12 0a102 102 0 0 1 174.12-72.12l25.88 25.7V88a6 6 0 0 1 12 0");
}
</style><path class="juv36bc3n"/>`,
		"fallback": "ph:arrow-arc-right-light",
	});
}

export default Component;
