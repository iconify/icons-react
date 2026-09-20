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
		"content": `<style>.z5ybrvncc {
  fill: currentColor;
  d: path("M232 108v40a16 16 0 0 1-16 16h-52v52a16 16 0 0 1-16 16h-40a16 16 0 0 1-16-16v-52H40a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h52V40a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v52h52a16 16 0 0 1 16 16");
}
</style><path class="z5ybrvncc"/>`,
		"fallback": "ph:first-aid-fill",
	});
}

export default Component;
