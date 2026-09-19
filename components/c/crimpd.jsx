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
		"content": `<style>.eqfrbywsq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 31.402h3.696l4.465-5.514l5.628 4.241l8.588-10.234L38.76 32.416l4.363-4.761a1.436 1.436 0 1 0-2.117-1.94l-2.283 2.49l-11.978-12.621l-8.904 10.611l-5.667-4.27z");
}
</style><path class="eqfrbywsq"/>`,
		"fallback": "arcticons:crimpd",
	});
}

export default Component;
