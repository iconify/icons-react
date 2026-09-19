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
		"content": `<style>.vl9-lgbhz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 6.904h4.055v25.579H5.5zm6.589 16.503h4.055v9.077h-4.055zm6.589-7.53h4.055v14.595h-4.055zm6.589 0h4.055v25.218h-4.055zm6.589 4.281h4.055v14.595h-4.055zm6.589-10.521H42.5v25.115h-4.055z");
}
</style><path class="vl9-lgbhz"/>`,
		"fallback": "arcticons:dr-lyd",
	});
}

export default Component;
