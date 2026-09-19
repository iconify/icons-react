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
		"content": `<style>.g_yatib-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.916 19.018l-2.458 9.963L24 19.018l-2.457 9.963l-2.458-9.963m-2.119 6.663h-4.355m-1.079 3.301l3.257-9.963l3.256 9.963m17.344-3.301h-4.355m-1.079 3.301l3.257-9.963l3.256 9.963");
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
</style><rect class="j3s9ivbxi"/><path class="g_yatib-r"/>`,
		"fallback": "arcticons:awa",
	});
}

export default Component;
