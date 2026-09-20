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
		"content": `<style>.r-h-2jx-j {
  fill: currentColor;
  d: path("M232 128a8 8 0 0 1-8 8h-16v48a16 16 0 0 1-16 16h-40a16 16 0 0 1-16-16v-48h-16v72a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16v-72H32a8 8 0 0 1 0-16h16V48a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v72h16V72a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v48h16a8 8 0 0 1 8 8");
}
</style><path class="r-h-2jx-j"/>`,
		"fallback": "ph:align-center-vertical-fill",
	});
}

export default Component;
