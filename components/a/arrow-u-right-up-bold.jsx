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
		"content": `<style>.tayao2brm {
  fill: currentColor;
  d: path("M224.49 88.49a12 12 0 0 1-17 0L180 61v107a68 68 0 0 1-136 0V80a12 12 0 0 1 24 0v88a44 44 0 0 0 88 0V61l-27.51 27.49a12 12 0 1 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1 0 17");
}
</style><path class="tayao2brm"/>`,
		"fallback": "ph:arrow-u-right-up-bold",
	});
}

export default Component;
