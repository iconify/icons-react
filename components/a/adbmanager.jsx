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
		"content": `<style>.defvn1bgv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.297 14.625v14.097m0-5.851a3.524 3.524 0 1 1 7.048 0v2.326a3.524 3.524 0 1 1-7.048 0m-3.773-10.572v14.097m0-3.525a3.524 3.524 0 1 1-7.048 0v-2.326a3.524 3.524 0 1 1 7.048 0m-10.821 2.326a3.524 3.524 0 1 1-7.048 0v-2.326a3.524 3.524 0 1 1 7.048 0m0-3.524v9.375");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="defvn1bgv"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:adbmanager",
	});
}

export default Component;
