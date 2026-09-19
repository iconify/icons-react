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

.nnkhqziab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.426 18.003v.053a4.24 4.24 0 0 1-4.238 4.238h0a4.24 4.24 0 0 1-4.238-4.238v-4.318A4.24 4.24 0 0 1 29.188 9.5h0a4.24 4.24 0 0 1 4.238 4.238v.052m-18.852 8.466L18.82 9.5m4.07 12.794L18.82 9.5m2.709 8.514h-5.543m2.444 15.208l5.278 5.278l5.278-5.278M23.708 38.5V25.706");
}
</style><path class="nnkhqziab"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:aliucordinstaller",
	});
}

export default Component;
