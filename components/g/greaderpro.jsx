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
		"content": `<style>.dl4qm6a2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 42.5h-8v-6.82a22.24 22.24 0 0 0-22.18-22.22H5.5v-8h6.82A30.18 30.18 0 0 1 42.5 35.68Z");
}

.hj0hggnop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30 42.5h-7.95v-6.82A9.67 9.67 0 0 0 12.38 26H5.5v-8h6.82A17.66 17.66 0 0 1 30 35.68h0Z");
}

.l06vbrlyb {
  cx: 11.2px;
  cy: 36.8px;
  r: 5.7px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="hj0hggnop"/><path class="dl4qm6a2g"/><circle class="l06vbrlyb"/>`,
		"fallback": "arcticons:greaderpro",
	});
}

export default Component;
