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
		"content": `<style>.hwgqf-bmu {
  cx: 30.95px;
  cy: 17.2px;
  r: 0.75px;
  fill: currentColor;
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

.plzwfjdhy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.95 19.926V32.15");
}

.umsuu9btg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.3 16.718V32.15m10.224-15.432V32.15M16.3 24.405h10.224");
}
</style><rect class="j3s9ivbxi"/><path class="umsuu9btg"/><circle class="hwgqf-bmu"/><path class="plzwfjdhy"/>`,
		"fallback": "arcticons:hianime",
	});
}

export default Component;
