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
		"content": `<style>.c74_t9k1y {
  fill: currentColor;
  d: path("m158.66 196.44l-32 48a8 8 0 1 1-13.32-8.88l32-48a8 8 0 0 1 13.32 8.88M232 92a76.08 76.08 0 0 1-76 76h-23.72l-29.62 44.44a8 8 0 1 1-13.32-8.88L113.05 168H76a52 52 0 0 1 0-104a53 53 0 0 1 8.92.76A76.08 76.08 0 0 1 232 92m-16 0a60.06 60.06 0 0 0-120-3.54a8 8 0 0 1-16-.92q.21-3.66.77-7.23A38 38 0 0 0 76 80a36 36 0 0 0 0 72h80a60.07 60.07 0 0 0 60-60");
}
</style><path class="c74_t9k1y"/>`,
		"fallback": "ph:cloud-rain",
	});
}

export default Component;
