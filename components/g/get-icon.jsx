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
		"content": `<style>.dq8t_syjc {
  cx: 30.405px;
  cy: 28.99px;
  r: 7.223px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.htcsn5bkh {
  cx: 15.937px;
  cy: 16.729px;
  r: 4.284px;
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

.jry-wfbol {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.52 34.092l4.403 4.641M5.5 37.916c0-2.418.263-4.03 1.833-5.653l4.936-5.1c2.461-2.544 6.444-2.523 8.93.046l.334.344");
}
</style><circle class="dq8t_syjc"/><path class="jry-wfbol"/><circle class="htcsn5bkh"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:get-icon",
	});
}

export default Component;
