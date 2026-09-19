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
		"content": `<style>.cu_43firc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.298 25.5c0 1.667 1.333 3 3 3s2.889-1.333 2.889-3v-3c0-1.667-1.334-3-2.89-3s-3 1.333-3 3zm-4.484-4.762l2.25-1.238m0 0v9");
}

.uph4zqc9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h24l9-9v-24a4 4 0 0 0-4-4m-5 0v37m-19-28v28m28-9h-37m37-19h-28");
}
</style><path class="cu_43firc"/><path class="uph4zqc9i"/>`,
		"fallback": "arcticons:calendar-google-10",
	});
}

export default Component;
