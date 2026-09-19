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

.ykbcedcfo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 28a3 3 0 1 0-3 3h3zm3 3a3 3 0 1 0-3-3v3zm-3 3a3 3 0 1 0 3-3h-3zm-3-3a3 3 0 1 0 3 3v-3zm-5-19.564a8 8 0 1 0 16 0");
}
</style><path class="ykbcedcfo"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:app-market",
	});
}

export default Component;
