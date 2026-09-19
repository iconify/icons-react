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
		"content": `<style>.sl63rdyzt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h16v26.36h-16zm0 37h16V31.86m21-10.72V42.5h-16v-37m16 10.64h-16");
}
</style><path class="sl63rdyzt"/>`,
		"fallback": "arcticons:games-tracker",
	});
}

export default Component;
