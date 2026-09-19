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
		"content": `<style>.jr5unsq4y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.25 37.45v-6.17s-8-7.44-8-15.86S18.11 4.5 24 4.5S36.81 7 36.81 15.42s-8.06 15.86-8.06 15.86v6.17m-9.5 0h9.5l-9.5 6.05h9.5");
}

.xg6_an_tb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.03 18.61l-6.71-6.71l1.36 12.06l-6.71-6.72");
}
</style><path class="jr5unsq4y"/><path class="xg6_an_tb"/>`,
		"fallback": "arcticons:hue",
	});
}

export default Component;
