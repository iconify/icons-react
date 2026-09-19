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

.u-yr8s1ce {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.715 22.561l-.001-9.061l-4.862 6.086h6.002m-10.845 2.975l-.001-9.061l-4.862 6.086h6.002M17.538 34.5h4.53m-4.53-7.827l2.265-1.234m0 0V34.5m7.441 0h4.53m-4.53-7.827l2.265-1.234m0 0V34.5");
}
</style><path class="i9clfwm2k"/><path class="u-yr8s1ce"/>`,
		"fallback": "arcticons:4411",
	});
}

export default Component;
