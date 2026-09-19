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
		"content": `<style>.m2ych4u8o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.539 28.849h12.34m-25.072 0h10.752m1.98 9.52V9.631H42.5m-37 28.738l17.059-25.75");
}
</style><path class="m2ych4u8o"/>`,
		"fallback": "arcticons:appsfree",
	});
}

export default Component;
