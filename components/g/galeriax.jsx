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
		"content": `<style>.vipj2xk1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28 20L42.5 5.5m-37 37L20 28m8 0l14.5 14.5m-37-37L20 20");
}
</style><path class="vipj2xk1b"/>`,
		"fallback": "arcticons:galeriax",
	});
}

export default Component;
