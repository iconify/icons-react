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

.qiwr_4b2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.063 18.542l3.75-2.042v15m12.124-3.75a3.75 3.75 0 1 1-7.5 0v-2.437a3.75 3.75 0 1 1 7.5 0m0 6.187v-9.937");
}
</style><path class="i9clfwm2k"/><path class="qiwr_4b2s"/>`,
		"fallback": "arcticons:1alv",
	});
}

export default Component;
