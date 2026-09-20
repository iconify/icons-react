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
		"content": `<style>.g6zvs-b_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.5 20.179l2.625-1.429v10.5M22.228 24a2.625 2.625 0 0 0 0 5.25h1.706a2.625 2.625 0 0 0 0-5.25m0 0a2.625 2.625 0 0 0 0-5.25h-1.706a2.625 2.625 0 0 0 0 5.25m0 0h1.706m5.316 0h5.25m-2.625-2.625v5.25");
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
</style><rect class="j3s9ivbxi"/><path class="g6zvs-b_k"/>`,
		"fallback": "arcticons:18-plus",
	});
}

export default Component;
