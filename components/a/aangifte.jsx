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

.xgn5dobnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 14.318s-9.033 3.995-18.958 19.556c0 0-7.612-6.14-13.668-9.547l-2.65 3.028C14.837 34.042 22.491 42.5 22.491 42.5M42.5 19.785C33.089 30.93 27.2 42.5 27.2 42.5");
}
</style><rect class="j3s9ivbxi"/><path class="xgn5dobnc"/>`,
		"fallback": "arcticons:aangifte",
	});
}

export default Component;
