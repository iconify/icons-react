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
		"content": `<style>.b8xn0r6fb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 13.5v-10h-37v37h37v-10h-27V27h27V17h-27v-3.5z");
}
</style><path class="b8xn0r6fb"/>`,
		"fallback": "arcticons:edeka",
	});
}

export default Component;
