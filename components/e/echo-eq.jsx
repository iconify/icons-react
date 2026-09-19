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
		"content": `<style>.f2fbp5q8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.521 25.696a6.813 6.813 0 0 1-6.813 6.813a6.813 6.813 0 0 1-6.813-6.813a6.813 6.813 0 0 1 6.813-6.813a6.813 6.813 0 0 1 6.813 6.813m0 0V4.5l10.945 4.024");
}

.r5_x7ebjv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m41.929 25.25l.001.226v0C41.93 35.431 33.903 43.5 24 43.5S6.07 35.43 6.07 25.476c0-8.09 5.357-15.161 13.056-17.345");
}
</style><path class="f2fbp5q8r"/><path class="r5_x7ebjv"/>`,
		"fallback": "arcticons:echo-eq",
	});
}

export default Component;
