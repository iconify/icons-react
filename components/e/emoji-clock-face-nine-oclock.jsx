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
		"content": `<style>.up04qr5jv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.04 8.108v15.89m0 0l-10.641.03M2.5 23.998c-.002 11.874 9.623 21.5 21.497 21.502S45.498 35.878 45.5 24.005v-.007C45.5 12.125 35.874 2.5 24 2.5S2.5 12.125 2.5 23.998");
}
</style><path class="up04qr5jv"/>`,
		"fallback": "arcticons:emoji-clock-face-nine-oclock",
	});
}

export default Component;
