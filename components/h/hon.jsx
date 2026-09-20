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
		"content": `<style>.d-8lfgbhk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.477 21.757v9.249m.051-3.816a2.312 2.312 0 1 1 4.624 0v3.816m20.371.041v-3.944a2.39 2.39 0 1 0-4.78 0m0 3.944v-6.334m-13.14-2.45a5.345 5.345 0 0 1 10.69 0v3.474a5.345 5.345 0 0 1-10.69 0z");
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
</style><rect class="j3s9ivbxi"/><path class="d-8lfgbhk"/>`,
		"fallback": "arcticons:hon",
	});
}

export default Component;
