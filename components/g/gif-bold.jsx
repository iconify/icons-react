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
		"content": `<style>.ndmawvbgq {
  fill: currentColor;
  d: path("M148 72v112a12 12 0 0 1-24 0V72a12 12 0 0 1 24 0m84 12a12 12 0 0 0 0-24h-56a12 12 0 0 0-12 12v112a12 12 0 0 0 24 0v-44h36a12 12 0 0 0 0-24h-36V84ZM96 116H72a12 12 0 0 0 0 24h12v12a20 20 0 0 1-40 0v-48a20 20 0 0 1 20-20c9.42 0 18.18 6.45 20.38 15a12 12 0 1 0 23.24-6C102.7 73.88 84.35 60 64 60a44.05 44.05 0 0 0-44 44v48a44 44 0 0 0 88 0v-24a12 12 0 0 0-12-12");
}
</style><path class="ndmawvbgq"/>`,
		"fallback": "ph:gif-bold",
	});
}

export default Component;
