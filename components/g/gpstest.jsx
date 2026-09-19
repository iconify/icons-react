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
		"content": `<style>.b-z3omb_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 41.06l9.1-12L21.26 37l9.1-11.8L42.5 41.06Z");
}

.hp-b2jbid {
  d: path("M11.57 6.94a5.81 5.81 0 0 1-5.81 5.8v-5.8Z");
}

.kx1vyj5ad {
  d: path("M17.37 6.94A11.61 11.61 0 0 1 5.76 18.55V6.94Z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="b-z3omb_k"/><g class="y9tr6bcfx"><path class="kx1vyj5ad"/><path class="hp-b2jbid"/></g>`,
		"fallback": "arcticons:gpstest",
	});
}

export default Component;
