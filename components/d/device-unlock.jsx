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
		"content": `<style>.e_x0mg_5p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.5 15.489V39.5c0 2.216-1.784 4-4 4h-23c-2.216 0-4-1.784-4-4v-31c0-2.216 1.784-4 4-4h16.011z");
}

.rfi5bub9k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.351 33.354h4.874l-2.512-9.362a4.555 4.555 0 1 0-3.412-.004l-2.503 9.366h4.874M8.794 20.686h10.61m9.104 0H39.34m-30.611 3.1h13.129m4.356 0h12.932M8.489 27.107h12.728m5.406 0h12.61");
}
</style><path class="e_x0mg_5p"/><path class="rfi5bub9k"/>`,
		"fallback": "arcticons:device-unlock",
	});
}

export default Component;
