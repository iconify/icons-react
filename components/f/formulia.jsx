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
		"content": `<style>.n1vo95f1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.102 35.915v-23.83m-11.188 23.83v-23.83m0 23.83H6.674a2.17 2.17 0 0 1-1.64-3.592L12.245 24l-7.21-8.323a2.17 2.17 0 0 1 1.64-3.592H43.5");
}
</style><path class="n1vo95f1i"/>`,
		"fallback": "arcticons:formulia",
	});
}

export default Component;
