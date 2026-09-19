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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.nnyaokllk {
  width: 7.287px;
  height: 11px;
  x: 18.17px;
  y: 18.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.644px;
  ry: 3.644px;
}

.sdv4dtbvr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.083 19.997l2.75-1.497v11");
}

.xqvksf5nu {
  width: 7.287px;
  height: 11px;
  x: 28.629px;
  y: 18.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.644px;
  ry: 3.644px;
}
</style><path class="sdv4dtbvr"/><rect class="nnyaokllk"/><rect class="xqvksf5nu"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:100",
	});
}

export default Component;
