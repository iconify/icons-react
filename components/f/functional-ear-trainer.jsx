import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hz90yqibn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.875 4.5c-.554 0-1 .446-1 1v22.139l-.002.002a8.5 8.5 0 0 0-4.248-1.14a8.5 8.5 0 1 0 8.5 8.5V21.5h2.75c.554 0 1-.447 1-1v-2c0-.555-.446-1-1-1h-2.75v-5h7.75c.554 0 1-.447 1-1v-6c0-.555-.446-1-1-1z");
}
</style><path class="hz90yqibn"/>`,
		"fallback": "arcticons:functional-ear-trainer",
	});
}

export default Component;
