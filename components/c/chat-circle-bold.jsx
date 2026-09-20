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
		"content": `<style>.biooc1bjx {
  fill: currentColor;
  d: path("M128 20a108 108 0 0 0-96.15 157.23L21 209.66A20 20 0 0 0 46.34 235l32.43-10.81A108 108 0 1 0 128 20m0 192a84 84 0 0 1-42.06-11.27a12 12 0 0 0-6-1.62a12.1 12.1 0 0 0-3.8.62l-29.79 9.93l9.93-29.79a12 12 0 0 0-1-9.81A84 84 0 1 1 128 212");
}
</style><path class="biooc1bjx"/>`,
		"fallback": "ph:chat-circle-bold",
	});
}

export default Component;
