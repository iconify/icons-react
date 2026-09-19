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
		"content": `<style>.i84_scbrz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 32.412v-6.728l3.231 6.735l3.231-6.725v6.725m1.616.001l2.14-6.736l2.141 6.735m1.616-6.735v6.735h3.231m1.616.001l2.14-6.736l2.141 6.735m1.616.001v-6.736h2.115c1.196 0 2.166 1.013 2.166 2.262s-.97 2.262-2.166 2.262H34.22m2.058 0l2.17 2.21m-6.623-1.682h-2.938m-7.814 0h-2.938M33.47 20.632h-2.862m-16.431 1.684v-6.735h1.454c1.562 0 2.828 1.319 2.828 2.946v.842c0 1.628-1.266 2.947-2.828 2.947zm6.705-6.736v6.736m2.424 0v-6.735l4.281 6.735v-6.735m2.423 6.735l2.141-6.735l2.14 6.735");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><path class="i84_scbrz"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:dinamalar",
	});
}

export default Component;
