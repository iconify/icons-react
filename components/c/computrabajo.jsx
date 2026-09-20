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

.ygkk33bsx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18 36.27c2.6.5 5.1.99 7.8.93s5.5-.67 7.6-1.4c2.1-.7 3.6-1.5 5.1-2.3m-3.472-21.378v15.89a2.67 2.67 0 0 0 2.67 2.67h.802m-6.276-14.154h5.608m-8.615 6.99v.087a7.077 7.077 0 1 1-14.154 0v-7.21a7.077 7.077 0 1 1 14.154 0v.133");
}
</style><path class="i9clfwm2k"/><path class="ygkk33bsx"/>`,
		"fallback": "arcticons:computrabajo",
	});
}

export default Component;
