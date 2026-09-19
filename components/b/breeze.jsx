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
		"content": `<style>.kme_1ab3v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.5 5.5C29.851 5.5 35 10.649 35 17s-5.149 11.5-11.5 11.5H13a7 7 0 1 0 0 14h17.5C36.851 42.5 42 37.351 42 31s-5.149-11.5-11.5-11.5H13a7 7 0 1 1 0-14z");
}
</style><path class="kme_1ab3v"/>`,
		"fallback": "arcticons:breeze",
	});
}

export default Component;
