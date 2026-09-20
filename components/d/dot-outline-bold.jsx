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
		"content": `<style>.kjjv_lb6w {
  fill: currentColor;
  d: path("M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 40a8 8 0 1 1 8-8a8 8 0 0 1-8 8");
}
</style><path class="kjjv_lb6w"/>`,
		"fallback": "ph:dot-outline-bold",
	});
}

export default Component;
