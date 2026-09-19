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
		"content": `<style>.c2xrbabwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 19.6v18.9a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4z");
}

.dlcmgbhfr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.423 15.077H9.5v17.846M15.3 24H9.5m11.154-8.923l4.461 17.846l3.904-17.846l4.462 17.846L38.5 15.077");
}
</style><path class="dlcmgbhfr"/><path class="c2xrbabwq"/>`,
		"fallback": "arcticons:feedwatcher",
	});
}

export default Component;
