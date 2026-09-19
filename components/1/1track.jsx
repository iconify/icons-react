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
		"content": `<style>.emgvzqbpy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.304 34.249L24 44.5L5.696 34.249V13.751L24 3.5l18.304 10.251z");
}

.t6r2_uw7l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.221 26.715l5.21-2.865v19.211");
}
</style><path class="t6r2_uw7l"/><path class="emgvzqbpy"/>`,
		"fallback": "arcticons:1track",
	});
}

export default Component;
