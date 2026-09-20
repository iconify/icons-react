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
		"content": `<style>.w1u0w2o3i {
  fill: currentColor;
  d: path("M116 136v-36a12 12 0 0 1 24 0v36a12 12 0 0 1-24 0m12 24a16 16 0 1 0 16 16a16 16 0 0 0-16-16M104 24h48a12 12 0 0 0 0-24h-48a12 12 0 0 0 0 24m100 36v168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V60a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Z");
}
</style><path class="w1u0w2o3i"/>`,
		"fallback": "ph:battery-warning-vertical-bold",
	});
}

export default Component;
