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
		"content": `<style>.zjgui1byw {
  fill: currentColor;
  d: path("M228 64a36 36 0 1 0-48 33.94V112a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4V97.94a36 36 0 1 0-24 0V112a28 28 0 0 0 28 28h36v18.06a36 36 0 1 0 24 0V140h36a28 28 0 0 0 28-28V97.94A36.07 36.07 0 0 0 228 64M64 52a12 12 0 1 1-12 12a12 12 0 0 1 12-12m64 152a12 12 0 1 1 12-12a12 12 0 0 1-12 12m64-128a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="zjgui1byw"/>`,
		"fallback": "ph:git-fork-bold",
	});
}

export default Component;
