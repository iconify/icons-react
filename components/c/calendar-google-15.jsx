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
		"content": `<style>.gs5mo7_io {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.795 20.738l2.25-1.238m0 0v9m2.197-.787c.675.562 1.238.787 2.7.787h.338c1.575 0 2.925-1.35 2.925-2.925h0c0-1.575-1.35-2.925-2.925-2.925h-3.038V19.5h5.963");
}

.uph4zqc9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h24l9-9v-24a4 4 0 0 0-4-4m-5 0v37m-19-28v28m28-9h-37m37-19h-28");
}
</style><path class="gs5mo7_io"/><path class="uph4zqc9i"/>`,
		"fallback": "arcticons:calendar-google-15",
	});
}

export default Component;
