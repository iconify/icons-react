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

.w-9a2kb7f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.117 23.647H36C35.808 17.16 30.494 12 24.003 12C17.373 12 12 17.373 12 24s5.374 12 12.002 12c4.038 0 7.609-1.993 9.784-5.048");
}
</style><path class="w-9a2kb7f"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:enel-energia",
	});
}

export default Component;
