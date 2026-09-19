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
		"content": `<style>.g2alxtbek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.326 38.849a4.652 4.652 0 1 0 9.303 0");
}

.r6ie1_o-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.277 32.7V21.49A13.27 13.27 0 0 0 27.08 8.588v-.985a3.102 3.102 0 0 0-6.204 0V8.6a13.27 13.27 0 0 0-10.153 12.89V32.7l-4.206 4.206v1.943h34.966v-1.943Z");
}
</style><path class="r6ie1_o-e"/><path class="g2alxtbek"/>`,
		"fallback": "arcticons:hourlyreminder",
	});
}

export default Component;
