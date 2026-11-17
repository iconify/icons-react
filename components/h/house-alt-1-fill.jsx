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
		"content": `<style>.wjacidb7i {
  fill: currentColor;
  d: path("M11 17v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8.092c0-.866.373-1.689 1.024-2.258l6-5.25a3 3 0 0 1 3.952 0l6 5.25A3 3 0 0 1 21 10.908V19a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-2a1 1 0 0 0-2 0");
}
</style><path class="wjacidb7i"/>`,
		"fallback": "coolicons:house-alt-1-fill",
	});
}

export default Component;
