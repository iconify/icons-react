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

.ls3tx0bwp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.897 9.642c-14.001 8.254-9.364 15.25-8.858 15.863c3.232 3.174 6.84-.179 10.037-2.322l-.7-1.94l1.145 3.102c2.114 7.227-2.324 10.076-1.455 14.207");
}
</style><path class="ls3tx0bwp"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:gauguin",
	});
}

export default Component;
