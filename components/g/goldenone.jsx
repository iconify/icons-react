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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.lk3_0lbiz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.981 33.5h9.5m-9.5-16.414l4.75-2.586m0 0v19M23.23 20.869c0-3.631-3.032-6.552-6.698-6.36c-3.436.18-6.013 3.272-6.013 6.72v5.902c0 3.518 2.845 6.369 6.355 6.369h0c3.51 0 6.355-2.851 6.355-6.369h-6.355");
}
</style><path class="lk3_0lbiz"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:goldenone",
	});
}

export default Component;
