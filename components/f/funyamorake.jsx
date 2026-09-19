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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.iy7kvccuq {
  cx: 12.5px;
  cy: 11.5px;
  r: 1.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lds4uoqxp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.5 19.5C37.5 26.956 31.456 33 24 33s-13.5-6.044-13.5-13.5v-4h27z");
}

.qj4skfjtq {
  cx: 35.5px;
  cy: 11.5px;
  r: 1.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><path class="lds4uoqxp"/><circle class="iy7kvccuq"/><circle class="qj4skfjtq"/>`,
		"fallback": "arcticons:funyamorake",
	});
}

export default Component;
