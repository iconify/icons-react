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
		"content": `<style>.a6uujgbns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.017 29.647V18.353h3.698c2.09 0 3.785 1.698 3.785 3.793s-1.695 3.793-3.785 3.793h-3.698m3.698 0l3.697 3.706m-18.192.002V18.353l7.483 11.294V18.353M14.16 24a2.824 2.824 0 1 1 0 5.647H9.5V18.353h4.66a2.824 2.824 0 1 1 0 5.647m-.001 0H9.5");
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
</style><rect class="j3s9ivbxi"/><path class="a6uujgbns"/>`,
		"fallback": "arcticons:bnr",
	});
}

export default Component;
