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
		"content": `<style>.w3bn80s1s {
  fill: currentColor;
  d: path("M18 22H6a3 3 0 0 1-3-3v-8.092c0-.866.373-1.689 1.024-2.258l6-5.25a3 3 0 0 1 3.952 0l6 5.25A3 3 0 0 1 21 10.908V19a3 3 0 0 1-3 3M9.236 9.832a3 3 0 1 0 5.527 2.335a3 3 0 0 0-5.527-2.335M16.901 20a5.003 5.003 0 0 0-9.802 0Z");
}
</style><path class="w3bn80s1s"/>`,
		"fallback": "coolicons:house-user-fill",
	});
}

export default Component;
