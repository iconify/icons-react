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
		"content": `<style>.r-8a0wb0b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.706 42.079V17.475L24 5.921l16.294 11.555V42.08zm16.294 0v-10.8");
}
</style><path class="r-8a0wb0b"/>`,
		"fallback": "arcticons:flexwork",
	});
}

export default Component;
