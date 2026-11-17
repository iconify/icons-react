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
		"content": `<style>.z9g6kb5af {
  fill: currentColor;
  d: path("M3 22a1 1 0 0 1 0-2v-9.092c0-.866.373-1.689 1.024-2.258l6-5.25a3 3 0 0 1 3.952 0l6 5.25A3 3 0 0 1 21 10.908V20a1 1 0 0 1 0 2Zm11-5a2 2 0 1 0-4 0v3h4Z");
}
</style><path class="z9g6kb5af"/>`,
		"fallback": "coolicons:house-alt-2-fill",
	});
}

export default Component;
