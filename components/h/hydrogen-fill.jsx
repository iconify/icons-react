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
		"content": `<style>.nrl5j7vwd {
  fill: currentColor;
  d: path("M14 2a1 1 0 0 1 0 2h-1v1.061A8.006 8.006 0 0 1 20 13v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6a8.006 8.006 0 0 1 7-7.939V4h-1a1 1 0 0 1 0-2Zm-4 13h4v2a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0v2h-4v-2a1 1 0 0 0-2 0v6a1 1 0 0 0 2 0Z");
}
</style><path class="nrl5j7vwd"/>`,
		"fallback": "coolicons:hydrogen-fill",
	});
}

export default Component;
