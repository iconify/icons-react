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
		"content": `<style>.lxpvh1boe {
  fill: currentColor;
  d: path("M208 88v88a8 8 0 0 1-16 0V88a48 48 0 0 0-96 0v116.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L80 204.69V88a64 64 0 0 1 128 0");
}
</style><path class="lxpvh1boe"/>`,
		"fallback": "ph:arrow-u-left-down",
	});
}

export default Component;
