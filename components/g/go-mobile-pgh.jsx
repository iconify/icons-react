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
		"content": `<style>.jax2sc_qy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.835 27.87h-.012L4.5 31.726L24 37.36l19.5-5.634l-13.323-3.856h-.012");
}

.k00u0u5rm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.165 20.146L43.5 24.002L30.165 27.87L24 29.648l-6.165-1.778L4.5 24.002l13.335-3.856");
}

.q4ehap0dx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.496 16.281L24 10.64L4.504 16.281L24 21.923z");
}
</style><path class="q4ehap0dx"/><path class="k00u0u5rm"/><path class="jax2sc_qy"/>`,
		"fallback": "arcticons:go-mobile-pgh",
	});
}

export default Component;
