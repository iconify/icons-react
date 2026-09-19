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

.y0uas8b5y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.12 42.483V25.22h6.179v17.263m15.402.017V30.465h6.18V42.5m-16.971-.008v-29.53h6.18V42.43");
}
</style><path class="y0uas8b5y"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:emoji-bar-chart",
	});
}

export default Component;
