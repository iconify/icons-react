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
		"content": `<style>.l7f51tbbi {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m37.52 96a37.8 37.8 0 0 0-6.76-16.27l37-36.95A89.6 89.6 0 0 1 217.8 122ZM154 128a26 26 0 1 1-26-26a26 26 0 0 1 26 26m-26 90a90 90 0 1 1 59.22-157.71l-36.95 36.95A38 38 0 1 0 165.52 134h52.28a90.12 90.12 0 0 1-89.8 84");
}
</style><path class="l7f51tbbi"/>`,
		"fallback": "ph:disc-light",
	});
}

export default Component;
