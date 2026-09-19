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
		"content": `<style>.fv6g-_b3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 9.189h19.622L11.83 38.811m30.67 0H22.878L36.17 9.189m-6.065 13.516H9.804");
}
</style><path class="fv6g-_b3x"/>`,
		"fallback": "arcticons:7-literoj",
	});
}

export default Component;
