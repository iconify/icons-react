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
		"content": `<style>.b5_jxvbdz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 36V12L24 24");
}

.x1yz1qpgl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.5 12l-37 24h35a2 2 0 0 0 2-2Z");
}
</style><path class="x1yz1qpgl"/><path class="b5_jxvbdz"/>`,
		"fallback": "arcticons:fastmail",
	});
}

export default Component;
