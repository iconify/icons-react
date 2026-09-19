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
		"content": `<style>.p_kswy9sl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.744 42.5c12.178-4.112 23.083-8.298 29.345-12.759C24.11 27.017 13.245 20.784 8.192 5.5c-1.444 2.397 2.53 24.84 15.31 28.069z");
}
</style><path class="p_kswy9sl"/>`,
		"fallback": "arcticons:cathay-pacific",
	});
}

export default Component;
