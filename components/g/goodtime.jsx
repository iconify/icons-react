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
		"content": `<style>.qeaf5kbyn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5L24 24L42.48 5.52zm37 37L24 24L5.52 42.48z");
}
</style><path class="qeaf5kbyn"/>`,
		"fallback": "arcticons:goodtime",
	});
}

export default Component;
