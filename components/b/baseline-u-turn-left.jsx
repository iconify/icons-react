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
		"content": `<style>.zx6imsemk {
  fill: currentColor;
  d: path("M18 9v12h-2V9c0-2.21-1.79-4-4-4S8 6.79 8 9v4.17l1.59-1.59L11 13l-4 4l-4-4l1.41-1.41L6 13.17V9c0-3.31 2.69-6 6-6s6 2.69 6 6");
}
</style><path class="zx6imsemk"/>`,
		"fallback": "ic:baseline-u-turn-left",
	});
}

export default Component;
