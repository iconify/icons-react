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
		"content": `<style>.ilj7abbmg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 27.89c4.62 0 4.62 6 9.25 6s4.62-6 9.25-6s4.62 6 9.25 6s4.62-6 9.25-6");
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

.q9fex6bnm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.33 5.5C36 14.4 32.88 36.61 24 36.61S12 14.4 10.67 5.5");
}
</style><rect class="j3s9ivbxi"/><path class="q9fex6bnm"/><path class="ilj7abbmg"/>`,
		"fallback": "arcticons:desmos",
	});
}

export default Component;
