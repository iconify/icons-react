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
		"content": `<style>.vofztyb7r {
  fill: currentColor;
  d: path("M204.24 124.24a6 6 0 0 1-8.48 0L128 56.49l-67.76 67.75a6 6 0 0 1-8.48-8.48l72-72a6 6 0 0 1 8.48 0l72 72a6 6 0 0 1 0 8.48");
}
</style><path class="vofztyb7r"/>`,
		"fallback": "ph:control-light",
	});
}

export default Component;
