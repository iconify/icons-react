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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.rw-2skh8u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.466 18.575V27.5a1.5 1.5 0 0 0 1.5 1.5h.45m-1.95-7.95h1.95m2.713-2.475V27.5a1.5 1.5 0 0 0 1.5 1.5h.45m-1.95-7.95h1.95m-18.158 3a3 3 0 1 0-6 0V26a3 3 0 1 0 6 0m0 0v-9m2.777 7.05a3 3 0 1 1 6 0V26a3 3 0 1 1-6 0z");
}
</style><path class="rw-2skh8u"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:dott",
	});
}

export default Component;
