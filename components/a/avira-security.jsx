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
		"content": `<style>.hsgd_gbgy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.701 13.096c-7.595-7.595-19.91-7.595-27.505 0s-7.595 19.91 0 27.505z");
}

.mrip80b8m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.949 26.848l11.066 11.066a3.799 3.799 0 1 0 5.372-5.372l-1.44-1.44");
}
</style><path class="hsgd_gbgy"/><path class="mrip80b8m"/>`,
		"fallback": "arcticons:avira-security",
	});
}

export default Component;
