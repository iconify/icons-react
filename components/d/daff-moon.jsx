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
		"content": `<style>.e27kzbbsj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.955 22.736l1.943 3.939l4.347.63l-3.146 3.065l.744 4.329l-3.888-2.045l-3.887 2.045l.744-4.329l-3.146-3.065l4.347-.63zM4.5 41.122h38.626");
}

.p0ul9nxso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.245 41.123c5.57-3.61 9.255-9.88 9.255-17.011c0-7.294-3.868-13.668-9.652-17.235a20.13 20.13 0 0 1 3.02 10.603c0 11.187-9.068 20.255-20.255 20.255a20.13 20.13 0 0 1-10.603-3.02a20.4 20.4 0 0 0 6.258 6.408");
}
</style><path class="p0ul9nxso"/><path class="e27kzbbsj"/>`,
		"fallback": "arcticons:daff-moon",
	});
}

export default Component;
