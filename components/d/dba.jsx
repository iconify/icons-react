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
		"content": `<style>.i26r67ujb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.4 25.18c0-1.94-1.553-3.527-3.45-3.527S10.5 23.24 10.5 25.18v2.293c0 1.94 1.552 3.528 3.45 3.528s3.45-1.588 3.45-3.528m0 3.529V16.891m3.318 8.335c0-1.94 1.553-3.528 3.45-3.528s3.45 1.588 3.45 3.528v2.293c0 1.94-1.552 3.528-3.45 3.528s-3.45-1.587-3.45-3.528m0 3.528V16.936M37.5 27.58c0 1.941-1.552 3.529-3.45 3.529S30.6 29.52 30.6 27.58v-2.293c0-1.94 1.553-3.528 3.45-3.528s3.45 1.588 3.45 3.528m0 5.821v-9.349");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="i9clfwm2k"/><path class="i26r67ujb"/>`,
		"fallback": "arcticons:dba",
	});
}

export default Component;
