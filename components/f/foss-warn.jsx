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
		"content": `<style>.b1l0l7bru {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3.5 39.773L24.052 4.21L44.5 39.791Z");
}

.b7nwvyzla {
  cx: 24.06px;
  cy: 33.073px;
  r: 0.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.st_3xv1jb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.058 14.677v13.26");
}
</style><path class="b1l0l7bru"/><circle class="b7nwvyzla"/><path class="st_3xv1jb"/>`,
		"fallback": "arcticons:foss-warn",
	});
}

export default Component;
