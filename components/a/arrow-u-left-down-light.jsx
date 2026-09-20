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
		"content": `<style>.ygsldg17y {
  fill: currentColor;
  d: path("M206 88v88a6 6 0 0 1-12 0V88a50 50 0 0 0-100 0v121.51l37.76-37.75a6 6 0 0 1 8.48 8.48l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L82 209.51V88a62 62 0 0 1 124 0");
}
</style><path class="ygsldg17y"/>`,
		"fallback": "ph:arrow-u-left-down-light",
	});
}

export default Component;
