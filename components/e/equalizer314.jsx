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
		"content": `<style>.chseogods {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.383 24.23h8.514v18.162H5.383zM19.743 5.5h8.514v36.892h-8.514zm14.361 12.027h8.514V42.5h-8.514z");
}
</style><path class="chseogods"/>`,
		"fallback": "arcticons:equalizer314",
	});
}

export default Component;
