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
		"content": `<style>.f45gmdb1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 2.5l18.62 10.75v21.5L24 45.5L5.38 34.75v-21.5zm0 0v43");
}

.iu24r3r3i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.379 13.248A37.24 37.24 0 0 1 24 45.5a37.24 37.24 0 0 1 18.621-32.252");
}
</style><path class="f45gmdb1f"/><path class="iu24r3r3i"/>`,
		"fallback": "arcticons:banque-saudi-fransi",
	});
}

export default Component;
