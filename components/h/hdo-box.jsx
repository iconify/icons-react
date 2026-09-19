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
		"content": `<style>.fmi8ayf-h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4m1.85 10.2v16m0-7.32h15.64m0-11.48v22.2m2.84-18.72v16m0-16l8.82 8m-8.82 8l8.82-8");
}
</style><path class="fmi8ayf-h"/>`,
		"fallback": "arcticons:hdo-box",
	});
}

export default Component;
