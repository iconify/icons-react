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
		"content": `<style>.b79e12b4e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9 5a4 4 0 0 0-4 4v30a4 4 0 0 0 4 4h30a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4zM5 34.533h38");
}

.nqya38mpm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.809 26.972c1.042 1.357 2.348 1.862 4.167 1.862h2.516a4.244 4.244 0 0 0 4.24-4.249h0a4.244 4.244 0 0 0-4.24-4.249h-2.78a4.244 4.244 0 0 1-4.24-4.248h0a4.244 4.244 0 0 1 4.24-4.25h2.516c1.818 0 3.125.506 4.167 1.863m-15.867 9.434v.07a5.63 5.63 0 0 1-5.63 5.629h0a5.63 5.63 0 0 1-5.63-5.63v-5.736a5.63 5.63 0 0 1 5.63-5.63h0a5.63 5.63 0 0 1 5.63 5.63v.07");
}
</style><path class="b79e12b4e"/><path class="nqya38mpm"/>`,
		"fallback": "arcticons:camscanner",
	});
}

export default Component;
