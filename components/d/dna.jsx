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
		"content": `<style>.we-re5shp {
  fill: currentColor;
  d: path("M200 204.5V232a8 8 0 0 1-16 0v-27.5a63.67 63.67 0 0 0-35.38-57.25l-48.4-24.19A79.58 79.58 0 0 1 56 51.5V24a8 8 0 0 1 16 0v27.5a63.67 63.67 0 0 0 35.38 57.25l48.4 24.19A79.58 79.58 0 0 1 200 204.5m-40-4.5H72.17a63.6 63.6 0 0 1 3.23-16h72.71a8 8 0 0 0 0-16H83.46a63.7 63.7 0 0 1 14.65-15.08A8 8 0 1 0 88.64 140A80.27 80.27 0 0 0 56 204.5V232a8 8 0 0 0 16 0v-16h88a8 8 0 0 0 0-16m32-184a8 8 0 0 0-8 8v16H96a8 8 0 0 0 0 16h87.83a63.6 63.6 0 0 1-3.23 16h-72.71a8 8 0 1 0 0 16h64.65a63.7 63.7 0 0 1-14.65 15.08a8 8 0 0 0 9.47 12.9A80.27 80.27 0 0 0 200 51.5V24a8 8 0 0 0-8-8");
}
</style><path class="we-re5shp"/>`,
		"fallback": "ph:dna",
	});
}

export default Component;
