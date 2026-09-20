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

.mj1j57bcq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.453 15l11.924 18m0-18L12.453 33m23.095-7.425a4.5 4.5 0 1 0-9 0V28.5a4.5 4.5 0 1 0 9 0m-.001 4.5V15");
}
</style><path class="mj1j57bcq"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:adobe-xd",
	});
}

export default Component;
