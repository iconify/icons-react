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
		"content": `<style>.vcxx0cbnc {
  fill: currentColor;
  d: path("M239.81 107.5c-5.19 67.42-103.7 121.23-108 123.54a8 8 0 0 1-7.58 0C119.8 228.67 16 172 16 102a62 62 0 0 1 96.47-51.55a4 4 0 0 1 .61 6.17L99.72 70a8 8 0 0 0 0 11.31l32.53 32.53L111 135a8 8 0 1 0 11.31 11.31l26.88-26.87a8 8 0 0 0 0-11.31l-32.49-32.5l17.47-17.47A61.63 61.63 0 0 1 178.41 40c36.32.23 64.18 31.29 61.4 67.5");
}
</style><path class="vcxx0cbnc"/>`,
		"fallback": "ph:heart-break-fill",
	});
}

export default Component;
