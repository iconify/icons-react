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
		"content": `<style>.vq3a2ac8h {
  fill: currentColor;
  d: path("M42.34 77.66A8 8 0 0 1 48 64h160a8 8 0 0 1 5.66 13.66l-80 80a8 8 0 0 1-11.32 0ZM208 184H48a8 8 0 0 0 0 16h160a8 8 0 0 0 0-16");
}
</style><path class="vq3a2ac8h"/>`,
		"fallback": "ph:caret-line-down-fill",
	});
}

export default Component;
