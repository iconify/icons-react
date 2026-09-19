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
		"content": `<style>.p0t0sdz1a {
  cx: 24.028px;
  cy: 40.186px;
  r: 2.317px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.q14p2gbsk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.85 5.615c-5.768 7.102-6.17 14.683-3.416 22.465c-3.47 3.013-7.16 6.026-9.138 10.17");
}

.t4vrw9hva {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.15 5.5c7.095 7.745 4.575 15.104 3.584 22.523c3.369 2.841 6.723 5.706 9.158 10.146");
}
</style><path class="q14p2gbsk"/><circle class="p0t0sdz1a"/><path class="t4vrw9hva"/>`,
		"fallback": "arcticons:hktweaks",
	});
}

export default Component;
