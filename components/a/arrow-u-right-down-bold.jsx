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
		"content": `<style>.h-j90ewfd {
  fill: currentColor;
  d: path("m224.49 184.49l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 1 1 17-17L156 195V88a44 44 0 0 0-88 0v88a12 12 0 0 1-24 0V88a68 68 0 0 1 136 0v107l27.51-27.52a12 12 0 0 1 17 17Z");
}
</style><path class="h-j90ewfd"/>`,
		"fallback": "ph:arrow-u-right-down-bold",
	});
}

export default Component;
