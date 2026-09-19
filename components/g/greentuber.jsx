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

.w60a-cpds {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.35 36.8c-3.87 1.69-6.23 0-6.23-3.7l-.02-17.85c-.31-4.04 2.38-6.06 6.42-3.7l15.15 8.75c3.03 2.02 3.03 5.39-.16 7.75z");
}
</style><path class="w60a-cpds"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:greentuber",
	});
}

export default Component;
