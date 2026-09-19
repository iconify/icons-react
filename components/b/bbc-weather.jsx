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
		"content": `<style>.mz87j4bwm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 24.165h8.801V42.5H5.5zm18.666-9.864V5.5h18.335v8.801zm-6.807 9.31l6.223-6.223l12.965 12.965l-6.224 6.223z");
}
</style><path class="mz87j4bwm"/>`,
		"fallback": "arcticons:bbc-weather",
	});
}

export default Component;
