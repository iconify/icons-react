import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ktqpz0uqj {
  fill: currentColor;
  d: path("M14.5 3A2.5 2.5 0 0 1 17 5.5v3.901a3 3 0 0 0-1-.36V7H4v7.5A1.5 1.5 0 0 0 5.5 16H11v1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3zm0 1h-9A1.5 1.5 0 0 0 4 5.5V6h12v-.5A1.5 1.5 0 0 0 14.5 4m-1 8v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0m1 1v-1a1 1 0 1 1 2 0v1zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5");
}
</style><path class="ktqpz0uqj"/>`,
		"fallback": "fluent:calendar-lock-20-regular",
	});
}

export default Component;
