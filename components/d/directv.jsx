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
		"content": `<style>.ao7n12gmq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.103 29.34V12.501h5.365c5.763 0 10.43 4.504 10.43 10.058v1.852m-.643 4.527c-1.474 3.831-5.301 6.56-9.787 6.56h-4.043M5.5 34.583c8.517-5.517 23.48-10.127 37-12.345");
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
</style><path class="ao7n12gmq"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:directv",
	});
}

export default Component;
