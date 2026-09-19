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
		"content": `<style>.wd2612b2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.5 10.35h-31a4 4 0 0 0-4 4v19.3a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4v-19.3a4 4 0 0 0-4-4M9.38 15.57h12.26M9.38 21.24h12.26M9.38 26.92h12.26m0 5.68H9.38m16.98-17.03h12.27m-12.27 5.67h12.27m-12.27 5.68h12.27m0 5.68H26.36");
}
</style><path class="wd2612b2s"/>`,
		"fallback": "arcticons:aard",
	});
}

export default Component;
