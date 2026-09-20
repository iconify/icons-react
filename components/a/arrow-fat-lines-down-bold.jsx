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
		"content": `<style>.id4i7l-vq {
  fill: currentColor;
  d: path("M235.09 131.41A12 12 0 0 0 224 124h-36v-4a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v4H32a12 12 0 0 0-8.49 20.49l96 96a12 12 0 0 0 17 0l96-96a12 12 0 0 0 2.58-13.08M128 215l-67-67h19a12 12 0 0 0 12-12v-4h72v4a12 12 0 0 0 12 12h19ZM68 40a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12m0 40a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12");
}
</style><path class="id4i7l-vq"/>`,
		"fallback": "ph:arrow-fat-lines-down-bold",
	});
}

export default Component;
