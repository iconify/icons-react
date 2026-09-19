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
		"content": `<style>.cnfc-5vba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.82 10.5a3.32 3.32 0 1 1 0 6.64a3.32 3.32 0 0 1 0-6.64m20.36 0a3.32 3.32 0 1 1 0 6.64a3.32 3.32 0 0 1 0-6.64M24 20.68A3.32 3.32 0 0 1 27.32 24h0A3.32 3.32 0 0 1 24 27.32h0A3.32 3.32 0 0 1 20.68 24h0A3.32 3.32 0 0 1 24 20.68M13.82 30.86a3.32 3.32 0 0 1 3.32 3.32h0a3.32 3.32 0 0 1-3.32 3.32h0a3.32 3.32 0 0 1-3.32-3.32h0a3.32 3.32 0 0 1 3.32-3.32m20.36 0a3.32 3.32 0 0 1 3.32 3.32h0a3.32 3.32 0 0 1-3.32 3.32h0a3.32 3.32 0 0 1-3.32-3.32h0a3.32 3.32 0 0 1 3.32-3.32");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="cnfc-5vba"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:dicer",
	});
}

export default Component;
