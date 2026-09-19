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
		"content": `<style>.b5keqibsa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.554 21.673h18.892M20.166 38.5V21.673M27.834 38.5V21.673");
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

.qbdtqj7gn {
  cx: 24.038px;
  cy: 14.088px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.064px;
  ry: 4.588px;
}
</style><ellipse class="qbdtqj7gn"/><path class="b5keqibsa"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:better-uk",
	});
}

export default Component;
