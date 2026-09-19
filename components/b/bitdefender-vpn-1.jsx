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
		"content": `<style>.dm1tvfbxv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.87 22.39l-2.603 2.604a2.617 2.617 0 0 0 0 3.701l2.038 2.038a2.617 2.617 0 0 0 3.701 0l3.005-3.005c.377-.376.588-.887.588-1.42V21.28");
}

.nn7_uabpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.13 23.61l2.603-2.604a2.617 2.617 0 0 0 0-3.701l-2.038-2.038a2.617 2.617 0 0 0-3.701 0l-3.005 3.005a2 2 0 0 0-.588 1.42v5.028");
}

.x4afujshd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 42.5c16.65-7.85 15.05-21.05 15.05-23.45v-7.6L24 5.5L8.95 11.45v7.6c0 2.4-1.6 15.6 15.05 23.45");
}
</style><path class="x4afujshd"/><path class="dm1tvfbxv"/><path class="nn7_uabpv"/>`,
		"fallback": "arcticons:bitdefender-vpn-1",
	});
}

export default Component;
