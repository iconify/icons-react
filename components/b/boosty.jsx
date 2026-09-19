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
		"content": `<style>.ze0__-zxl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.819 5.5l-6.98 25.064h4.724L18.946 42.35l11.47-16.626h-5.033l4.337-11.2c7.698 1.145 11.05 7.409 8.706 14.47C36.079 36.06 28.81 42.5 19.073 42.5c-9.21 0-11.23-6.839-9.834-11.86L16.22 5.5z");
}
</style><path class="ze0__-zxl"/>`,
		"fallback": "arcticons:boosty",
	});
}

export default Component;
