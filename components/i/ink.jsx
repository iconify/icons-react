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

.l08sr2bhs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.5 18.755v10.472m3.217 0v-7.003a3.469 3.469 0 0 1 6.938 0v7.003m3.216-10.454v10.472m0-3.648l5.629-6.789m0 10.437l-4.312-5.236");
}
</style><rect class="j3s9ivbxi"/><path class="l08sr2bhs"/>`,
		"fallback": "arcticons:ink",
	});
}

export default Component;
