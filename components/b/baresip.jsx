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
		"content": `<style>.mi6x78k3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.5 43.5h23a4 4 0 0 0 4-4v-31a4 4 0 0 0-4-4h-23a4 4 0 0 0-4 4v31a4 4 0 0 0 4 4");
}

.ssprhabsd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.25 26.713a7.75 7.75 0 0 1 15.5 0v5.037a7.75 7.75 0 0 1-15.5 0m0-23.25v31m5.328-27.125h7.75M25.453 8.5v7.75");
}
</style><path class="ssprhabsd"/><path class="mi6x78k3j"/>`,
		"fallback": "arcticons:baresip",
	});
}

export default Component;
