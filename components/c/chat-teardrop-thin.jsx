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
		"content": `<style>.opm38m-1r {
  fill: currentColor;
  d: path("M132 28a96.11 96.11 0 0 0-96 96v84a12 12 0 0 0 12 12h84a96 96 0 0 0 0-192m0 184H48a4 4 0 0 1-4-4v-84a88 88 0 1 1 88 88");
}
</style><path class="opm38m-1r"/>`,
		"fallback": "ph:chat-teardrop-thin",
	});
}

export default Component;
