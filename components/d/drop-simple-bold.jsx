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
		"content": `<style>.q2cd7-_zx {
  fill: currentColor;
  d: path("M134.88 6.17a12 12 0 0 0-13.76 0a259 259 0 0 0-42.18 39C50.85 77.43 36 111.63 36 144a92 92 0 0 0 184 0c0-77.36-81.64-135.4-85.12-137.83M128 212a68.07 68.07 0 0 1-68-68c0-33.31 20-63.37 36.7-82.71A249.4 249.4 0 0 1 128 31.11a249.4 249.4 0 0 1 31.3 30.18C176 80.63 196 110.69 196 144a68.07 68.07 0 0 1-68 68");
}
</style><path class="q2cd7-_zx"/>`,
		"fallback": "ph:drop-simple-bold",
	});
}

export default Component;
