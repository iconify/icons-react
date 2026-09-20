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
		"content": `<style>.wy1_l7i8i {
  fill: currentColor;
  d: path("M186.66 59.56C168.47 32.29 146.54 16 128 16S87.53 32.29 69.34 59.56C50.7 87.54 40 121.23 40 152a88 88 0 0 0 176 0c0-30.77-10.7-64.46-29.34-92.44M128 224a72.08 72.08 0 0 1-72-72c0-27.69 9.72-58.15 26.66-83.56C97.19 46.64 115.41 32 128 32c9.5 0 22.2 8.33 34.1 21.78L122 98.67a8 8 0 0 0 4 13.09l24.6 6.15l-6.5 32.52a8 8 0 0 0 6.27 9.41a7.8 7.8 0 0 0 1.63.16a8 8 0 0 0 7.83-6.43l8-40a8 8 0 0 0-5.9-9.33l-19.16-4.79L172.1 66.6c.42.61.83 1.22 1.24 1.84C190.28 93.85 200 124.31 200 152a72.08 72.08 0 0 1-72 72");
}
</style><path class="wy1_l7i8i"/>`,
		"fallback": "ph:egg-crack",
	});
}

export default Component;
