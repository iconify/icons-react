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
		"content": `<style>.s4a83cbsd {
  fill: currentColor;
  d: path("M240 132a28 28 0 0 1-24 27.71V200a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16v-40.29A28 28 0 1 1 72 132v36a8 8 0 0 0 16 0v-24h80v24a8 8 0 0 0 16 0v-36a28 28 0 0 1 56 0M44 88a44.06 44.06 0 0 1 43.81 40h80.38A44.06 44.06 0 0 1 212 88a4 4 0 0 0 4-4V72a40 40 0 0 0-40-40H80a40 40 0 0 0-40 40v12a4 4 0 0 0 4 4");
}
</style><path class="s4a83cbsd"/>`,
		"fallback": "ph:armchair-fill",
	});
}

export default Component;
