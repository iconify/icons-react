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
		"content": `<style>.wrapxq9tj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.5 4.5v3H12v30h4.5v6h6v-3h-2v-3H28v6h6v-3h-2v-3h4V32H23V20h13V7.5h-5v-3h-3v3h-7.5v-3zm17.375 17V20m-3.25 1.5V20m-3.25 1.5V20m-3.25 1.5V20m9.75 12v-1.5m-3.25 1.5v-1.5m-3.25 1.5v-1.5m-3.25 1.5v-1.5");
}
</style><path class="wrapxq9tj"/>`,
		"fallback": "arcticons:au-digira",
	});
}

export default Component;
