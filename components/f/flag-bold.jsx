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
		"content": `<style>.xltyw-vkm {
  fill: currentColor;
  d: path("M40.14 46.88A12 12 0 0 0 36 56v168a12 12 0 0 0 24 0v-42.28c22.84-17.12 42.1-9.12 70.68 5c16.23 8 34.74 17.2 54.8 17.2c14.72 0 30.28-4.94 46.38-18.88A12 12 0 0 0 236 176V56a12 12 0 0 0-19.86-9.07c-24.71 21.41-44.53 13.31-74.82-1.68c-28.13-13.98-63.15-31.31-101.18 1.63M212 170.26c-22.84 17.13-42.1 9.11-70.68-5C118.16 153.76 90.33 140 60 153.87V61.69c22.84-17.12 42.1-9.12 70.68 5c16.23 8 34.74 17.2 54.8 17.2A63 63 0 0 0 212 78.08Z");
}
</style><path class="xltyw-vkm"/>`,
		"fallback": "ph:flag-bold",
	});
}

export default Component;
