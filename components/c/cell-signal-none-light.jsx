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
		"content": `<style>.fcxh8q8kp {
  fill: currentColor;
  d: path("M46 192v8a6 6 0 0 1-12 0v-8a6 6 0 0 1 12 0");
}
</style><path class="fcxh8q8kp"/>`,
		"fallback": "ph:cell-signal-none-light",
	});
}

export default Component;
