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

.uqhr--uhh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.94 17.3l4.56-2.507v18.414m-20.468-2.246c1.006 1.332 2.54 2.246 5.083 2.246h.425c3.337 0 6.041-2.73 6.041-6.1v-6.215");
}

.yiqwltb4d {
  cx: 19.539px;
  cy: 20.892px;
  r: 6.039px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><rect class="j3s9ivbxi"/><path class="uqhr--uhh"/><circle class="yiqwltb4d"/>`,
		"fallback": "arcticons:91mobiles",
	});
}

export default Component;
