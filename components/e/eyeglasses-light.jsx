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
		"content": `<style>.zcuey3sfo {
  fill: currentColor;
  d: path("M200 42a6 6 0 0 0 0 12a18 18 0 0 1 18 18v62.65A42 42 0 0 0 147.21 154h-38.42A42 42 0 0 0 38 134.65V72a18 18 0 0 1 18-18a6 6 0 0 0 0-12a30 30 0 0 0-30 30v92a42 42 0 0 0 84 2h36.1a42 42 0 0 0 83.9-2V72a30 30 0 0 0-30-30M68 194a30 30 0 1 1 30-30a30 30 0 0 1-30 30m120 0a30 30 0 1 1 30-30a30 30 0 0 1-30 30");
}
</style><path class="zcuey3sfo"/>`,
		"fallback": "ph:eyeglasses-light",
	});
}

export default Component;
