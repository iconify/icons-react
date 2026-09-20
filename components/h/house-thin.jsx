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
		"content": `<style>.pjak0ac5q {
  fill: currentColor;
  d: path("m216.49 111.51l-80-80a12 12 0 0 0-17 0l-80 80A12 12 0 0 0 36 120v96a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4v-60h40v60a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4v-96a12 12 0 0 0-3.51-8.49M212 212h-56v-60a4 4 0 0 0-4-4h-48a4 4 0 0 0-4 4v60H44v-92a4 4 0 0 1 1.17-2.83l80-80a4 4 0 0 1 5.66 0l80 80A4 4 0 0 1 212 120Z");
}
</style><path class="pjak0ac5q"/>`,
		"fallback": "ph:house-thin",
	});
}

export default Component;
