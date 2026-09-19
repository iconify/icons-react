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
		"content": `<style>.apjplfblw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.546 22.48h2.909s6.179 9.455 8.73 18.974c-.707-15.537-.8-18.703-8.73-36.433v15.405h-2.91V5.02c-7.93 17.73-8.023 20.896-8.729 36.433c2.55-9.519 8.73-18.974 8.73-18.974");
}

.m2j3tacfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5c12.838 0 19 4.622 19 19s-6.162 19-19 19S5 38.378 5 24S11.162 5 24 5");
}
</style><path class="apjplfblw"/><path class="m2j3tacfd"/>`,
		"fallback": "arcticons:acura",
	});
}

export default Component;
