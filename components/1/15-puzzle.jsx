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

.zi5wu9mxn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m15.758 18.906l3.5-1.906v14m4.409-1.18c.967.809 1.904 1.18 4.248 1.18h.402a3.925 3.925 0 0 0 0-7.85h-4.65V17h8.575");
}
</style><rect class="j3s9ivbxi"/><path class="zi5wu9mxn"/>`,
		"fallback": "arcticons:15-puzzle",
	});
}

export default Component;
