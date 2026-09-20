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
		"content": `<style>.cj6pq2elj {
  fill: currentColor;
  d: path("M236 88v64a4 4 0 0 1-4 4h-64a4 4 0 0 1 0-8h54.3l-29.24-29A92 92 0 0 0 36 184a4 4 0 0 1-8 0a100 100 0 0 1 170.71-70.71l29.29 29.1V88a4 4 0 0 1 8 0");
}
</style><path class="cj6pq2elj"/>`,
		"fallback": "ph:arrow-arc-right-thin",
	});
}

export default Component;
