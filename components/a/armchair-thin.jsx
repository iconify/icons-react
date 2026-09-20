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
		"content": `<style>.ia4yfhkrp {
  fill: currentColor;
  d: path("M212 92.23V72a36 36 0 0 0-36-36H80a36 36 0 0 0-36 36v20.23a36 36 0 0 0 0 71.55V200a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-36.22a36 36 0 0 0 0-71.55M80 44h96a28 28 0 0 1 28 28v20.23A36 36 0 0 0 172 128v4H84v-4a36 36 0 0 0-32-35.77V72a28 28 0 0 1 28-28m128.3 112h-.3a4 4 0 0 0-4 4v40a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-40a4 4 0 0 0-4-4h-.3A28 28 0 1 1 76 128v40a4 4 0 0 0 8 0v-28h88v28a4 4 0 0 0 8 0v-40a28 28 0 1 1 28.3 28");
}
</style><path class="ia4yfhkrp"/>`,
		"fallback": "ph:armchair-thin",
	});
}

export default Component;
