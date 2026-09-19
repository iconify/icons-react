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
		"content": `<style>.r_g9gkb-u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.477 35.485L42.762 16.55c1.641-1.797.366-4.687-2.067-4.687H7.305c-2.433 0-3.708 2.89-2.067 4.687l17.285 18.934a2 2 0 0 0 2.954 0");
}
</style><path class="r_g9gkb-u"/>`,
		"fallback": "arcticons:consumentenbond",
	});
}

export default Component;
