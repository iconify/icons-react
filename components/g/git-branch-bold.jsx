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
		"content": `<style>.x6ng2fb9q {
  fill: currentColor;
  d: path("M236 64a36 36 0 1 0-48 33.94V112a4 4 0 0 1-4 4H96a28 28 0 0 0-4 .29V97.94a36 36 0 1 0-24 0v60.12a36 36 0 1 0 24 0V144a4 4 0 0 1 4-4h88a28 28 0 0 0 28-28V97.94A36.07 36.07 0 0 0 236 64M80 52a12 12 0 1 1-12 12a12 12 0 0 1 12-12m0 152a12 12 0 1 1 12-12a12 12 0 0 1-12 12M200 76a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="x6ng2fb9q"/>`,
		"fallback": "ph:git-branch-bold",
	});
}

export default Component;
