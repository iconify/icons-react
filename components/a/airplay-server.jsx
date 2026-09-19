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
		"content": `<style>.n6t__ib5d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.38 35.83H8.729A3.22 3.22 0 0 1 5.5 32.6V9.923a3.22 3.22 0 0 1 3.228-3.228h30.544A3.22 3.22 0 0 1 42.5 9.923v22.678a3.22 3.22 0 0 1-3.228 3.228h-4.89");
}

.qwpzspgct {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.232 41.305l11.73-11.89l11.715 11.823z");
}
</style><path class="n6t__ib5d"/><path class="qwpzspgct"/>`,
		"fallback": "arcticons:airplay-server",
	});
}

export default Component;
