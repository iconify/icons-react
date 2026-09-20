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
		"content": `<style>.gqctg4b4s {
  fill: currentColor;
  d: path("M208 88v88a8 8 0 0 1-16 0V88a48 48 0 0 0-96 0v80h40a8 8 0 0 1 5.66 13.66l-48 48a8 8 0 0 1-11.32 0l-48-48A8 8 0 0 1 40 168h40V88a64 64 0 0 1 128 0");
}
</style><path class="gqctg4b4s"/>`,
		"fallback": "ph:arrow-u-left-down-fill",
	});
}

export default Component;
