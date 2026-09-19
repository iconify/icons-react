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
		"content": `<style>.zx8qq1b1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.128 43.5c-.624-8.112 1.248-9.984 3.12-10.608c14.976-3.744 12.518-13.441 5.616-18.096c2.496-13.728-19.344-13.728-17.472 0c-6.864 4.368-9.36 14.352 3.12 18.096");
}
</style><path class="zx8qq1b1b"/>`,
		"fallback": "arcticons:gumtree",
	});
}

export default Component;
