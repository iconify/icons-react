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
		"content": `<style>.e0h8e56zu {
  fill: currentColor;
  d: path("M229.54 133.7A6 6 0 0 0 224 130h-42v-26a6 6 0 0 0-6-6H80a6 6 0 0 0-6 6v26H32a6 6 0 0 0-4.24 10.24l96 96a6 6 0 0 0 8.48 0l96-96a6 6 0 0 0 1.3-6.54M128 223.51L46.49 142H80a6 6 0 0 0 6-6v-26h84v26a6 6 0 0 0 6 6h33.51ZM74 40a6 6 0 0 1 6-6h96a6 6 0 0 1 0 12H80a6 6 0 0 1-6-6m0 32a6 6 0 0 1 6-6h96a6 6 0 0 1 0 12H80a6 6 0 0 1-6-6");
}
</style><path class="e0h8e56zu"/>`,
		"fallback": "ph:arrow-fat-lines-down-light",
	});
}

export default Component;
