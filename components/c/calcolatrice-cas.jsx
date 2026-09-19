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
		"content": `<style>.x66nfncgc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.48 5.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29.04a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4zm6 37v-37m13.429 12.598L20 29.902m8.909 0L20 18.098m12.097 8.381H38m-5.903-4.958H38");
}
</style><path class="x66nfncgc"/>`,
		"fallback": "arcticons:calcolatrice-cas",
	});
}

export default Component;
