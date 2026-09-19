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
		"content": `<style>.i_816slrz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.071 16.096V13.43a7.929 7.929 0 0 1 15.858 0v2.667");
}

.rw7ukvo9h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m6.766 16.096l1.949 19.208a8.003 8.003 0 0 0 7.962 7.196h14.646a8.003 8.003 0 0 0 7.962-7.196l1.949-19.208Z");
}
</style><path class="rw7ukvo9h"/><path class="i_816slrz"/>`,
		"fallback": "arcticons:galaxystore",
	});
}

export default Component;
