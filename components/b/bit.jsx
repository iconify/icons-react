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

.syas9ibmz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.831 20.87h7.349a4.33 4.33 0 0 1 3.997 2.657a4.336 4.336 0 1 1-8.333 1.69l.022-9.309m11.11 4.962v8.671");
}

.t--6k27og {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.13 15.909l.001 9.286a4.335 4.335 0 0 0 4.845 4.317M24.7 20.866h7.128m2.108 8.255l-.614 2.97l5.847-2.97l-6.25-2.759zm-.032.023h1.389");
}

.yca616m1v {
  fill: currentColor;
  d: path("M23.726 18.122a.75.75 0 0 1-1.5 0a.75.75 0 0 1 1.5 0");
}
</style><rect class="j3s9ivbxi"/><path class="syas9ibmz"/><path class="yca616m1v"/><path class="t--6k27og"/>`,
		"fallback": "arcticons:bit",
	});
}

export default Component;
