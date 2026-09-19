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
		"content": `<style>.er3du3bwf {
  width: 29.514px;
  height: 29.514px;
  x: 9.38px;
  y: 9.243px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.216px;
  ry: 4.216px;
}

.w07af_aup {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m37.662 10.477l-27.05 27.048M4.5 24.142h39");
}
</style><rect class="er3du3bwf"/><path class="w07af_aup"/>`,
		"fallback": "arcticons:block-buster",
	});
}

export default Component;
