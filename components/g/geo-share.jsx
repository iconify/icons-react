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
		"content": `<style>.fezxnaccw {
  cx: 37.5px;
  cy: 19.513px;
  r: 5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jfacwzbjr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.965 23.032c-8.891 7.641-22.358 12.034-26.541 10.7");
}

.n6sr35b0x {
  cx: 35.392px;
  cy: 35.639px;
  r: 5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.o2vvu79vg {
  cx: 16.384px;
  cy: 10.5px;
  r: 5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ypcc7z3_n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.893 39.206A16.5 16.5 0 0 1 22 42.5c-9.112 0-16.5-7.387-16.5-16.5a16.5 16.5 0 0 1 6.494-13.12");
}
</style><path class="ypcc7z3_n"/><circle class="o2vvu79vg"/><circle class="n6sr35b0x"/><circle class="fezxnaccw"/><path class="jfacwzbjr"/>`,
		"fallback": "arcticons:geo-share",
	});
}

export default Component;
