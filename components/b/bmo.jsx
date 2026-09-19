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

.k4o_yjbkq {
  cx: 24px;
  cy: 24px;
  r: 14px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lfdgvtbxo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.692 25.783v4.44h12.846v-4.44zm0-5.68v5.68l3.223-4.057l3.2 4.057l3.088-4.102l3.335 4.102V19.99l-3.133-3.764l-3.155 3.786l-3.358-3.809z");
}
</style><rect class="j3s9ivbxi"/><circle class="k4o_yjbkq"/><path class="lfdgvtbxo"/>`,
		"fallback": "arcticons:bmo",
	});
}

export default Component;
