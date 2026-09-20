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
		"content": `<style>.oqb12fb8p {
  fill: currentColor;
  d: path("M236 80a36 36 0 0 0-36-36H48a36 36 0 0 0-12 69.94V200a12 12 0 0 0 12 12h152a12 12 0 0 0 12-12v-86.06A36.07 36.07 0 0 0 236 80M44 200v-84.23a35 35 0 0 0 4 .23a4 4 0 0 0 0-8a28 28 0 0 1 0-56h96a28 28 0 0 1 0 56a4 4 0 0 0 0 8a35 35 0 0 0 4-.23V200a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4m156-92a4 4 0 0 0 0 8a35 35 0 0 0 4-.23V200a4 4 0 0 1-4 4h-44.7a11.8 11.8 0 0 0 .7-4v-86.06A36 36 0 0 0 166.59 52H200a28 28 0 0 1 0 56");
}
</style><path class="oqb12fb8p"/>`,
		"fallback": "ph:bread-thin",
	});
}

export default Component;
