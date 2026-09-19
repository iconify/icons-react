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
		"content": `<style>.b0gvv-cwu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.01 33.47c4.95-2.54 8.33-7.69 8.33-13.63C39.34 11.37 32.47 4.5 24 4.5S8.66 11.37 8.66 19.84c0 5.94 3.38 11.09 8.33 13.63");
}

.huva8xndp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.989 25.096a7.011 7.011 0 0 1 14.022 0v11.393a7.011 7.011 0 0 1-14.022 0z");
}

.m2xgwd9re {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.056 30.573a2.85 2.85 0 0 1 2.848-2.848h2.191a2.848 2.848 0 1 1 0 5.696h-2.19a2.85 2.85 0 0 1-2.849-2.848m-3.067 2.848h14.022");
}
</style><path class="b0gvv-cwu"/><path class="huva8xndp"/><path class="m2xgwd9re"/>`,
		"fallback": "arcticons:google-keep",
	});
}

export default Component;
