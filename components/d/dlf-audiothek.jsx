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
		"content": `<style>.aj-u1z-oh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.89 13.5h13.413M13.89 17.724h17.394M13.89 21.948h20.22v4.105H13.89zm17.394 8.328H13.89M27.271 34.5h-13.38");
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
</style><path class="aj-u1z-oh"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:dlf-audiothek",
	});
}

export default Component;
