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
		"content": `<style>.ery9lyr7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37 24.768a2.364 2.364 0 1 1-4.727 0v-1.536a2.364 2.364 0 1 1 4.727 0m0 3.9v-6.264m-21.273 2.364a2.364 2.364 0 1 0-4.727 0v1.536a2.364 2.364 0 1 0 4.727 0m0 2.364v-9.455m14.182 5.555a2.364 2.364 0 1 0-4.727 0v1.536a2.364 2.364 0 1 0 4.727 0m0 2.364v-9.455m-11.818 5.555a2.364 2.364 0 1 1 4.727 0v1.536a2.364 2.364 0 1 1-4.727 0zm21.289-4.799l-.992 1.065m1.601 1.022l-1.245.153m-.718-3.564l-.428 1.645");
}

.j3s9ivbxi {
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
</style><rect class="j3s9ivbxi"/><path class="ery9lyr7q"/>`,
		"fallback": "arcticons:doda",
	});
}

export default Component;
