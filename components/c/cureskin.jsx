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
		"content": `<style>.qj554fbra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.5 30.5a6.5 6.5 0 1 1 0-13H37a6.5 6.5 0 1 1 0 13z");
}

.sv38ogbzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11 30.5a6.5 6.5 0 1 1 0-13z");
}

.u8kdebxej {
  cx: 17.5px;
  cy: 24px;
  r: 6.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="sv38ogbzn"/><circle class="u8kdebxej"/><path class="qj554fbra"/>`,
		"fallback": "arcticons:cureskin",
	});
}

export default Component;
