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
		"content": `<style>.c-vam9bwc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.875 34.706V4.5h15.617c6.449 0 6.43 7.273 0 7.273h-7.874v6.88h7.94c5.929 0 5.927 7.338 0 7.338h-7.48V43.5");
}

.g0r_3g__a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.95 43.5V33.198c13.345.273 15.176-12.952 8.136-18.346");
}
</style><path class="c-vam9bwc"/><path class="g0r_3g__a"/>`,
		"fallback": "arcticons:finshell-pay",
	});
}

export default Component;
