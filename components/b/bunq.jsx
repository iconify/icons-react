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
		"content": `<style>.cgvl2qbve {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.488 20.571v4.27a2.588 2.588 0 0 0 5.176 0v-4.27m7.927 6.858v-4.27a2.588 2.588 0 0 0-5.176 0v4.27M9.5 23.159a2.588 2.588 0 0 1 5.176 0v1.682a2.588 2.588 0 0 1-5.176 0m0 2.588V17.077m29 7.764a2.588 2.588 0 0 1-5.176 0V23.16a2.588 2.588 0 0 1 5.176 0m0-2.589v10.352");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="i9clfwm2k"/><path class="cgvl2qbve"/>`,
		"fallback": "arcticons:bunq",
	});
}

export default Component;
