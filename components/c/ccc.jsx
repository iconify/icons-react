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

.z259k73vn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.1 25.64v.041a3.3 3.3 0 0 1-3.3 3.3h0a3.3 3.3 0 0 1-3.3-3.3V22.32a3.3 3.3 0 0 1 3.3-3.3h0a3.3 3.3 0 0 1 3.3 3.3v.04m9.2 3.28v.041a3.3 3.3 0 0 1-3.3 3.3h0a3.3 3.3 0 0 1-3.3-3.3V22.32a3.3 3.3 0 0 1 3.3-3.3h0a3.3 3.3 0 0 1 3.3 3.3v.04m9.2 3.28v.041a3.3 3.3 0 0 1-3.3 3.3h0a3.3 3.3 0 0 1-3.3-3.3V22.32a3.3 3.3 0 0 1 3.3-3.3h0a3.3 3.3 0 0 1 3.3 3.3v.04");
}
</style><rect class="j3s9ivbxi"/><path class="z259k73vn"/>`,
		"fallback": "arcticons:ccc",
	});
}

export default Component;
