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
		"content": `<style>.gn37mta9t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.11 33.07H16.86L24 21.22l10.92 18.14h7.58L24 8.64L5.5 39.36h25.4z");
}
</style><path class="gn37mta9t"/>`,
		"fallback": "arcticons:aimp",
	});
}

export default Component;
