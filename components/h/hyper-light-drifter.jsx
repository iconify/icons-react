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
		"content": `<style>.j0e22pbwd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 20.102l7.744 7.743L24 35.59l-7.744-7.744z");
}

.nt1ig3fjq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.141 25.333v-8.22c.811-.805 2.046-2.136 2.046-2.136L35.36 11.15l-2.97 2.971v6.46l-2.09-2.088V6.87h-4.75v6.871L24 12.192l-4.34 4.342V4.5h-4.752v16.785l-6.56 6.561L24 43.5l15.654-15.654z");
}
</style><path class="j0e22pbwd"/><path class="nt1ig3fjq"/>`,
		"fallback": "arcticons:hyper-light-drifter",
	});
}

export default Component;
