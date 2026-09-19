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
		"content": `<style>.c5gzelbts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 6.5L5.5 17.181V41.5h37V17.181z");
}

.pvsgsab7w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27 41.5v-6.016c3.59-1.25 5.99-4.655 6-8.484a9 9 0 1 0-18 0c.01 3.83 2.41 7.234 6 8.484V41.5");
}

.t-g1_fb0r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.553 30.835L25.67 27h-3.34l2.117-3.836");
}
</style><path class="c5gzelbts"/><path class="pvsgsab7w"/><path class="t-g1_fb0r"/>`,
		"fallback": "arcticons:chuden-power-outage-infomation",
	});
}

export default Component;
