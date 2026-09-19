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
		"content": `<style>.e7_fivb0i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.12 29.971a7.29 7.29 0 0 1-6.332 3.672c-4.025 0-7.288-3.258-7.288-7.278v-4.73a7.28 7.28 0 0 1 7.287-7.278q0 0 0 0c4.026 0 7.289 3.258 7.289 7.278V24H5.5m22.424-7.849H42.5M27.924 24H42.5m-14.576 7.848H42.5");
}
</style><path class="e7_fivb0i"/>`,
		"fallback": "arcticons:emergency",
	});
}

export default Component;
