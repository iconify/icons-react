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
		"content": `<style>.chnnh9bfk {
  fill: currentColor;
  d: path("M200 176a8 8 0 0 1-3.2 6.4l-64 48a8 8 0 0 1-4.8 1.6a8 8 0 0 1-8-8v-80l-51.2 38.4a8 8 0 0 1-9.6-12.8l55.47-41.6L59.2 86.4a8 8 0 0 1 9.6-12.8L120 112V32a8 8 0 0 1 12.8-6.4l64 48a8 8 0 0 1 0 12.8L141.33 128l55.47 41.6a8 8 0 0 1 3.2 6.4");
}
</style><path class="chnnh9bfk"/>`,
		"fallback": "ph:bluetooth-fill",
	});
}

export default Component;
