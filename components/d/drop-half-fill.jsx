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
		"content": `<style>.mj4pri3kh {
  fill: currentColor;
  d: path("M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M56 144c0-57.23 55.47-105 72-118v190a72.08 72.08 0 0 1-72-72");
}
</style><path class="mj4pri3kh"/>`,
		"fallback": "ph:drop-half-fill",
	});
}

export default Component;
