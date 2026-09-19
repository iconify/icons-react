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

.kx8wq9ldc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.5 16.596l5.087-2.77v20.348M35.5 20.566v6.868a6.74 6.74 0 0 1-6.74 6.74h0a6.74 6.74 0 0 1-6.74-6.74v-6.868a6.74 6.74 0 0 1 6.74-6.74h0c2.065 0 3.914.93 5.15 2.392l-.005.004L28.76 24");
}
</style><path class="i9clfwm2k"/><path class="kx8wq9ldc"/>`,
		"fallback": "arcticons:10-minute-school",
	});
}

export default Component;
