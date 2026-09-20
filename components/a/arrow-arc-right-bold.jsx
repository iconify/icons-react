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
		"content": `<style>.d8depyb8x {
  fill: currentColor;
  d: path("M244 88v64a12 12 0 0 1-12 12h-64a12 12 0 0 1 0-24h34.9l-15.48-15.37A84 84 0 0 0 44 184a12 12 0 0 1-24 0a108 108 0 0 1 184.37-76.37L220 123.16V88a12 12 0 0 1 24 0");
}
</style><path class="d8depyb8x"/>`,
		"fallback": "ph:arrow-arc-right-bold",
	});
}

export default Component;
