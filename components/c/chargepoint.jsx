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
		"content": `<style>.akkfgpe_c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.606 24H5.5m33-18.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.jpnp3ijoc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.394 19.394A6.394 6.394 0 0 0 24 13h0a6.394 6.394 0 0 0-6.394 6.394v9.212A6.394 6.394 0 0 0 24 35h0a6.394 6.394 0 0 0 6.394-6.394");
}
</style><path class="akkfgpe_c"/><path class="jpnp3ijoc"/>`,
		"fallback": "arcticons:chargepoint",
	});
}

export default Component;
