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
		"content": `<style>.a9_dab_wx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.568 20.962a5.962 5.962 0 1 0-11.925 0v6.075a5.962 5.962 0 1 0 11.925 0h-5.963");
}

.ipwgfhb_u {
  cx: 31.258px;
  cy: 30.902px;
  r: 2.098px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
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
</style><rect class="j3s9ivbxi"/><path class="a9_dab_wx"/><circle class="ipwgfhb_u"/>`,
		"fallback": "arcticons:glassy-icon-pack",
	});
}

export default Component;
