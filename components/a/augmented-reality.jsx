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
		"content": `<style>.boow0icng {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.966 24.012l-6.527-3.77v7.489l6.527 3.769zm6.485-3.743l-6.485 3.743V31.5l6.485-3.742z");
}

.h5hghcb-q {
  width: 39px;
  height: 25px;
  x: 4.5px;
  y: 11.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.mig3t1bzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.451 20.269L23.924 16.5l-6.485 3.742l6.527 3.77z");
}
</style><rect transform="rotate(90 24 24)" class="h5hghcb-q"/><path class="mig3t1bzn"/><path class="boow0icng"/>`,
		"fallback": "arcticons:augmented-reality",
	});
}

export default Component;
