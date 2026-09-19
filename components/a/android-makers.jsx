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
		"content": `<style>.colp78icw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 42.5l12.333-9.25L24 42.5l18.5-37");
}

.x_pv8pblw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 24L42.5 5.5v37h-37v-37z");
}
</style><path class="x_pv8pblw"/><path class="colp78icw"/>`,
		"fallback": "arcticons:android-makers",
	});
}

export default Component;
