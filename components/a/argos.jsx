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
		"content": `<style>.e_xbsubco {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.071 25.966H17.829m-3.527 10.633L24.95 4.5l10.649 32.099M9.383 39.664c9.664 4.925 19.405 5.258 29.235.124");
}
</style><path class="e_xbsubco"/>`,
		"fallback": "arcticons:argos",
	});
}

export default Component;
