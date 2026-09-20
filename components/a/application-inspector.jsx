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
		"content": `<style>.g_km_kbam {
  cx: 24px;
  cy: 21.5px;
  r: 17px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ymumcso8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 38.5v5m8.727-24.003l1.507-1.483a1.758 1.758 0 0 0-2.491-2.482l-.001.002l-1.484 1.511a10.71 10.71 0 0 0-12.513 0L16.25 15.55a1.85 1.85 0 0 0-1.263-.532a1.73 1.73 0 0 0-1.234.51a1.755 1.755 0 0 0 0 2.48l1.512 1.483a10.76 10.76 0 0 0-2.021 6.285v2.209H34.76v-2.209a10.76 10.76 0 0 0-2.033-6.279m-11.557 4.06a1.699 1.699 0 1 1-1.699-1.699a1.7 1.7 0 0 1 1.7 1.699m7.361 1.698a1.699 1.699 0 1 1 1.699-1.698a1.7 1.7 0 0 1-1.699 1.698");
}
</style><circle class="g_km_kbam"/><path class="ymumcso8r"/>`,
		"fallback": "arcticons:application-inspector",
	});
}

export default Component;
