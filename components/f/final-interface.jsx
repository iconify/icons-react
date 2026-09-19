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

.ocih_ccne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.498 30.883a7.766 7.766 0 1 1 13.25-5.582");
}

.zxy_28bub {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.74 39.83c7.02-6.51 22.47-14.01 36.76-17.39");
}
</style><rect class="j3s9ivbxi"/><path class="zxy_28bub"/><path class="ocih_ccne"/>`,
		"fallback": "arcticons:final-interface",
	});
}

export default Component;
