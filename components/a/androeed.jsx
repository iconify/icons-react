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

.jjuq00mfw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.95 28.95a7 7 0 1 1 0-9.9l-9.9 9.9m23.9 0a7 7 0 1 1 0-9.9l-9.9 9.9");
}
</style><rect class="j3s9ivbxi"/><path class="jjuq00mfw"/>`,
		"fallback": "arcticons:androeed",
	});
}

export default Component;
