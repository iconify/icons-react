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
		"content": `<style>.rp318acxz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.357 11.022h12.646M5.5 34.875h14.36m-7.18-7.181v14.361M31.1 5.945L41.254 16.1m0-10.155L31.1 16.1m-1.246 14.381H42.5m-12.646 8.787H42.5");
}
</style><path class="rp318acxz"/>`,
		"fallback": "arcticons:fossify-calculator",
	});
}

export default Component;
