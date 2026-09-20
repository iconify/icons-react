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
		"content": `<style>.uzqo9zbcc {
  fill: currentColor;
  d: path("M208 80v88a64 64 0 0 1-128 0V51.31L45.66 85.66a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1-11.32 11.32L96 51.31V168a48 48 0 0 0 96 0V80a8 8 0 0 1 16 0");
}
</style><path class="uzqo9zbcc"/>`,
		"fallback": "ph:arrow-u-left-up",
	});
}

export default Component;
