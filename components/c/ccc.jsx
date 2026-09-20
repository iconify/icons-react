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

.mznvk9boq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.1 25.64v.041a3.3 3.3 0 1 1-6.6 0V22.32a3.3 3.3 0 1 1 6.6 0v.04m9.2 3.28v.041a3.3 3.3 0 1 1-6.6 0V22.32a3.3 3.3 0 1 1 6.6 0v.04m9.2 3.28v.041a3.3 3.3 0 1 1-6.6 0V22.32a3.3 3.3 0 1 1 6.6 0v.04");
}
</style><rect class="j3s9ivbxi"/><path class="mznvk9boq"/>`,
		"fallback": "arcticons:ccc",
	});
}

export default Component;
