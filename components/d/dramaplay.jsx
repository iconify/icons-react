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
		"content": `<style>.d1wno8k_f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.75 24H14a8.5 8.5 0 1 0 8.5 8.5V7m6.75 17H34a8.5 8.5 0 1 0-8.5-8.5V41");
}
</style><path class="d1wno8k_f"/>`,
		"fallback": "arcticons:dramaplay",
	});
}

export default Component;
