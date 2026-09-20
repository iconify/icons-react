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
		"content": `<style>.m1hvpgy4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.392 24L4.5 10.087M24.392 24L4.5 37.913m25.572-2.796H43.5");
}
</style><path class="m1hvpgy4f"/>`,
		"fallback": "arcticons:haven",
	});
}

export default Component;
