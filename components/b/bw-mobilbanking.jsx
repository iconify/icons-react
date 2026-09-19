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
		"content": `<style>.apgw0tb5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.803 19l-2.5 10l-2.5-10l-2.5 10l-2.5-10m12.279 5h8.75m-8.75-5h8.75m0 10h-8.75m-16.789-5a2.5 2.5 0 0 1 0 5H9.168V19h4.125a2.5 2.5 0 0 1 0 5m0 0H9.168");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="i9clfwm2k"/><path class="apgw0tb5m"/>`,
		"fallback": "arcticons:bw-mobilbanking",
	});
}

export default Component;
