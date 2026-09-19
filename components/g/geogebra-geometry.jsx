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
		"content": `<style>.lgaao8o_f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.123 4.348L14.335 29.962h29.576z");
}

.p8tarjblc {
  cx: 17.069px;
  cy: 30.672px;
  r: 12.98px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="p8tarjblc"/><path class="lgaao8o_f"/>`,
		"fallback": "arcticons:geogebra-geometry",
	});
}

export default Component;
