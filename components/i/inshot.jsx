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
		"content": `<style>.aix2y_b0w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 9.611h28.889a4.01 4.01 0 0 1 4 4v18.097m4.111 6.681H13.611a4.01 4.01 0 0 1-4-4v-18.2m0-6.578V5.5m28.778 32.889V42.5");
}

.c3f-hsbol {
  cx: 24px;
  cy: 24px;
  r: 7px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="c3f-hsbol"/><path class="aix2y_b0w"/>`,
		"fallback": "arcticons:inshot",
	});
}

export default Component;
