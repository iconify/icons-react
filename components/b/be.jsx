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
		"content": `<style>.bz-b2vb3d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.625 36.457a9.75 9.75 0 1 1 4.875-8.443m-19.498 0H43.5m-38.997-.001V10.235");
}

.qt4y26klm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.954 33.135c-2.828-4.583-1.406-10.59 3.176-13.418c4.583-2.828 10.59-1.406 13.418 3.176s1.407 10.589-3.175 13.417s-10.589 1.407-13.418-3.174");
}
</style><path class="qt4y26klm"/><path class="bz-b2vb3d"/>`,
		"fallback": "arcticons:be",
	});
}

export default Component;
