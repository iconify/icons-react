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
		"content": `<style>.trtsg6b_i {
  fill: currentColor;
  d: path("M204.73 51.85A108.07 108.07 0 0 0 20 128v56a28 28 0 0 0 28 28h16a28 28 0 0 0 28-28v-40a28 28 0 0 0-28-28H44.84A84.05 84.05 0 0 1 128 44h.64a83.7 83.7 0 0 1 82.52 72H192a28 28 0 0 0-28 28v40a28 28 0 0 0 28 28h16a28 28 0 0 0 28-28v-56a107.34 107.34 0 0 0-31.27-76.15M64 140a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-44Zm148 44a4 4 0 0 1-4 4h-16a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4h20Z");
}
</style><path class="trtsg6b_i"/>`,
		"fallback": "ph:headphones-bold",
	});
}

export default Component;
