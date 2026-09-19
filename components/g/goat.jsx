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

.k8rehhtar {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.09 20h5.3m-2.65 8v-8m-4.583 5.324h-3.466m-.864 2.652l2.6-7.976l2.6 8M20.87 28a2.65 2.65 0 0 1-2.65-2.65v-2.7a2.65 2.65 0 1 1 5.3 0v2.7A2.65 2.65 0 0 1 20.87 28m-4.96-5.35a2.65 2.65 0 1 0-5.3 0v2.7a2.65 2.65 0 1 0 5.3 0h-2.65");
}
</style><path class="k8rehhtar"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:goat",
	});
}

export default Component;
