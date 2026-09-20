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
		"content": `<style>.av1k1fbrr {
  fill: currentColor;
  d: path("M228 88a99.63 99.63 0 0 0-16.18-54.55a12 12 0 0 0-10-5.45H54.23a12 12 0 0 0-10 5.45A99.63 99.63 0 0 0 28 88a100.15 100.15 0 0 0 88 99.28V212H88a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24h-28v-24.72A100.15 100.15 0 0 0 228 88M61.05 52H195a75.4 75.4 0 0 1 8.1 24H53a75.4 75.4 0 0 1 8.05-24m67 112a76.12 76.12 0 0 1-75-64H203a76.12 76.12 0 0 1-75 64Z");
}
</style><path class="av1k1fbrr"/>`,
		"fallback": "ph:brandy-bold",
	});
}

export default Component;
