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
		"content": `<style>.hewcj-cbj {
  fill: currentColor;
  d: path("M17 6a3 3 0 0 1 3 3v1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3zM9 9H6.017a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1");
}
</style><path class="hewcj-cbj"/>`,
		"fallback": "fluent:battery-3-24-filled",
	});
}

export default Component;
