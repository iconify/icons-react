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
		"content": `<style>.h0qgeuwow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z");
}

.oka9esbkt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.01 32.588a5.365 5.365 0 0 1-9.472-3.454v-5.268a5.365 5.365 0 0 1 5.365-5.366c1.658 0 3.14.752 4.124 1.933m-12.054 4.123h6.775m-6.775 3.926h6.775");
}
</style><path class="h0qgeuwow"/><path class="oka9esbkt"/>`,
		"fallback": "arcticons:folder-euro",
	});
}

export default Component;
