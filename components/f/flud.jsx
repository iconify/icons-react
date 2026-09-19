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
		"content": `<style>.qljf82c2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.66 4.5c0 4.09-13 15.8-13 25.58s7.67 13.42 13 13.42c4.77 0 13.64-2 13.64-12.62c0-11.6-13.64-18.53-13.64-26.38");
}
</style><path class="qljf82c2y"/>`,
		"fallback": "arcticons:flud",
	});
}

export default Component;
