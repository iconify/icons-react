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
		"content": `<style>.h2aqo7bhm {
  fill: currentColor;
  d: path("M196.8 169.6L141.33 128l55.47-41.6a8 8 0 0 0 0-12.8l-64-48A8 8 0 0 0 120 32v80L68.8 73.6a8 8 0 0 0-9.6 12.8l55.47 41.6l-55.47 41.6a8 8 0 1 0 9.6 12.8L120 144v80a8 8 0 0 0 12.8 6.4l64-48a8 8 0 0 0 0-12.8M136 48l42.67 32L136 112Zm0 160v-64l42.67 32Zm-76-68a12 12 0 1 1 12-12a12 12 0 0 1-12 12m156-12a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}
</style><path class="h2aqo7bhm"/>`,
		"fallback": "ph:bluetooth-connected",
	});
}

export default Component;
