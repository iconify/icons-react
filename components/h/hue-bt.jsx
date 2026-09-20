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

.m94mk76uc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.3 36.374c-.57 1.14-1.9 1.9-3.23 1.9c-2.09 0-3.8-1.71-3.8-3.8v-2.47c0-2.09 1.71-3.8 3.8-3.8s3.8 1.71 3.8 3.8v1.33h-7.6m-10.07-5.13v6.27c0 2.09 1.71 3.8 3.8 3.8s3.8-1.71 3.8-3.8v-6.27m0 6.27v3.8m-17.671-15.2v15.2m.001-6.27c0-2.09 1.71-3.8 3.8-3.8s3.8 1.71 3.8 3.8v6.27m2.018-25.581l8.504 8.004l-4.419 4.418V9.275l4.42 3.918l-8.505 8.087");
}
</style><path class="i9clfwm2k"/><path class="m94mk76uc"/>`,
		"fallback": "arcticons:hue-bt",
	});
}

export default Component;
