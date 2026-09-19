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

.qqf2_5bnt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.5 18.657l4.024-2l-2.59 14.686M26.781 24l5.13 7.343m-10.26-14.686l3.215 4.528m9.634-4.528L19.061 31.343");
}
</style><path class="i9clfwm2k"/><path class="qqf2_5bnt"/>`,
		"fallback": "arcticons:1xbet",
	});
}

export default Component;
