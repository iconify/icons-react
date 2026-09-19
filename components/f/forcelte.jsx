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
		"content": `<style>.bnx04z7uq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.927 30.5l-.001-13l-6.976 8.732h8.612m11.488-4.426a4.306 4.306 0 0 0-4.306-4.306h0a4.306 4.306 0 0 0-4.306 4.306v4.388a4.306 4.306 0 0 0 4.306 4.306h0a4.306 4.306 0 0 0 4.306-4.306h-4.306");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="i9clfwm2k"/><path class="bnx04z7uq"/>`,
		"fallback": "arcticons:forcelte",
	});
}

export default Component;
