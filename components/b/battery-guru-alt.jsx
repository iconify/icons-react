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
		"content": `<style>.blqliwbuo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.56 14.072a16.5 16.5 0 0 1 2.928.089m-24.048-.089a16.5 16.5 0 0 0-2.928.089");
}

.fp0-yybxg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 42.412a19.493 19.493 0 0 0 0-36.94");
}

.gkaumy7lg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.471a19.493 19.493 0 0 0 0 36.94");
}

.jjqfwcben {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.002 20.732c2.1 1.587 5.462 3.557 10.138-.539s8.711-4.35 15.253-2.02m-14.055 15.03l4.521-5.513h-4.367l4.521-5.513");
}

.z0fhqyoeq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.513 14.16A16.52 16.52 0 0 0 24 42.413M37.488 14.16A16.52 16.52 0 0 1 24 42.413");
}
</style><path class="gkaumy7lg"/><path class="z0fhqyoeq"/><path class="jjqfwcben"/><path class="fp0-yybxg"/><path class="blqliwbuo"/>`,
		"fallback": "arcticons:battery-guru-alt",
	});
}

export default Component;
