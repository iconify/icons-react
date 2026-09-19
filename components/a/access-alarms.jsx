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
		"content": `<style>.p217ei8gm {
  fill: currentColor;
  d: path("m22 5.7l-4.6-3.9l-1.3 1.5l4.6 3.9zM7.9 3.4L6.6 1.9L2 5.7l1.3 1.5zM12.5 8H11v6l4.7 2.9l.8-1.2l-4-2.4zM12 4c-5 0-9 4-9 9s4 9 9 9s9-4 9-9s-4-9-9-9m0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7s7 3.1 7 7s-3.1 7-7 7");
}
</style><path class="p217ei8gm"/>`,
		"fallback": "ic:access-alarms",
	});
}

export default Component;
