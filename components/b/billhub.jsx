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
		"content": `<style>.a547y-mgv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 26v12.5h6.25a6.25 6.25 0 1 0 0-12.5zm0-16.5V22h6.25a6.25 6.25 0 1 0 0-12.5z");
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

.x_laf3brs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26 26h12.5v12.5H26zm0-16.5h12.5V22H26z");
}
</style><path class="x_laf3brs"/><rect class="j3s9ivbxi"/><path class="a547y-mgv"/>`,
		"fallback": "arcticons:billhub",
	});
}

export default Component;
