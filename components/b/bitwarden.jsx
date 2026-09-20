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
		"content": `<style>.h77jfn74d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.13 43.332a2 2 0 0 0 1.74 0c8.794-4.282 15.354-10.894 15.354-17.655V6.527a1.997 1.997 0 0 0-1.997-1.996H9.773a1.997 1.997 0 0 0-1.997 1.997v19.15c0 6.76 6.56 13.372 15.353 17.653");
}

.nn0q8el2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 38.183c6.81-3.618 11.25-8.486 11.25-12.506V9.523H24.018z");
}
</style><path class="nn0q8el2y"/><path class="h77jfn74d"/>`,
		"fallback": "arcticons:bitwarden",
	});
}

export default Component;
