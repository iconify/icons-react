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
		"content": `<style>.q9_t4bcev {
  fill: currentColor;
  d: path("M208 32a8 8 0 0 1-8 8a88.1 88.1 0 0 0-88 88v40h40a8 8 0 0 1 5.66 13.66l-48 48a8 8 0 0 1-11.32 0l-48-48A8 8 0 0 1 56 168h40v-40A104.11 104.11 0 0 1 200 24a8 8 0 0 1 8 8");
}
</style><path class="q9_t4bcev"/>`,
		"fallback": "ph:arrow-bend-left-down-fill",
	});
}

export default Component;
