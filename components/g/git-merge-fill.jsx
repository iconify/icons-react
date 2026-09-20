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
		"content": `<style>.h36736nco {
  fill: currentColor;
  d: path("M208 112a32.05 32.05 0 0 0-30.69 23l-42.21-6a8 8 0 0 1-4.95-2.71L94.43 84.55A32 32 0 1 0 72 87v82a32 32 0 1 0 16 0v-67.37l30 35a24 24 0 0 0 14.83 8.14l44 6.28A32 32 0 1 0 208 112M96 200a16 16 0 1 1-16-16a16 16 0 0 1 16 16m112-40a16 16 0 1 1 16-16a16 16 0 0 1-16 16");
}
</style><path class="h36736nco"/>`,
		"fallback": "ph:git-merge-fill",
	});
}

export default Component;
