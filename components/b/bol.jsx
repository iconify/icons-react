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
		"content": `<style>.ce90062ku {
  width: 6.025px;
  height: 7.984px;
  x: 21.512px;
  y: 21.793px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.013px;
  ry: 3.013px;
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.od9ntjb8p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.02 17.725V28.27c0 .832.674 1.506 1.506 1.506h.451m-18.905-4.971a3.013 3.013 0 1 1 6.025 0v1.958a3.013 3.013 0 1 1-6.025 0m0 3.013V17.725");
}

.yighx2hyx {
  cx: 34.178px;
  cy: 29.525px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="i9clfwm2k"/><rect class="ce90062ku"/><circle class="yighx2hyx"/><path class="od9ntjb8p"/>`,
		"fallback": "arcticons:bol",
	});
}

export default Component;
