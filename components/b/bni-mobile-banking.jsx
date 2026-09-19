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
		"content": `<style>.fetr1u3uw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.912 29.697V18.303l7.548 11.394V18.303M18.2 24a2.848 2.848 0 1 1 0 5.697h-4.7V18.303h4.7a2.848 2.848 0 1 1 0 5.697m0 0h-4.7");
}

.jmjhtm5ov {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 42.5h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4m25-24.197v11.394");
}
</style><path class="jmjhtm5ov"/><path class="fetr1u3uw"/>`,
		"fallback": "arcticons:bni-mobile-banking",
	});
}

export default Component;
