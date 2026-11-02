import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w4rix4vyy {
  fill: currentColor;
  d: path("M4 4v14a1 1 0 0 0 1 1h16a1 1 0 0 1 0 2H5a3 3 0 0 1-3-3V4a1 1 0 0 1 2 0m8 2v3a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0M8 9v7a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0m8 0v3a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0m4 3v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0");
}
</style><path class="w4rix4vyy"/>`,
		"fallback": "coolicons:chart-waterfall-fill",
	});
}

export default Component;
