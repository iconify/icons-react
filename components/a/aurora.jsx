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
		"content": `<style>.kzvl4wbjv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.4 6.5v35a2 2 0 0 0 2 2h2.33v-39H10.4a2 2 0 0 0-2 2m4.33 37H37.6a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2H12.73");
}

.unir_f4ra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.465 30.5l-5.2-16l-5.4 16m1.8-5.4h7");
}
</style><path class="kzvl4wbjv"/><path class="unir_f4ra"/>`,
		"fallback": "arcticons:aurora",
	});
}

export default Component;
