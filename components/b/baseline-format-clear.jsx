import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z7lj7te8z {
  fill: currentColor;
  d: path("M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21L18 19.73L3.55 5.27zM6 5v.18L8.82 8h2.4l-.72 1.68l2.1 2.1L14.21 8H20V5z");
}
</style><path class="z7lj7te8z"/>`,
		"fallback": "ic:baseline-format-clear",
	});
}

export default Component;
