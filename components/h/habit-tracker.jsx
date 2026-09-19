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
		"content": `<style>.gidhm0h8u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M31.35 20v8m2.01-8h5.2m-2.6 8v-8M9.44 20v8m5.3-8v8m-5.3-4.1h5.3");
}

.ocakf2bgo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.34 24c1.1 0 2 .9 2 2s-.9 2-2 2h-3.3v-8h3.3c1.1 0 2 .9 2 2s-.9 2-2 2m-.001 0h-3.3m-2.897 1.3h-3.6m-.9 2.7l2.7-8l2.7 8");
}

.rjixvlbee {
  cx: 38.36px;
  cy: 14.578px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="gidhm0h8u"/><path class="ocakf2bgo"/><circle class="rjixvlbee"/>`,
		"fallback": "arcticons:habit-tracker",
	});
}

export default Component;
