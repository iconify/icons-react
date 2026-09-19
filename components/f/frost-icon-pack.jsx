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
		"content": `<style>.ljx1e_sqx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5L5.38 13.25v21.5L24 45.5l18.62-10.75v-21.5Zm-3.39 10.23h6.78v22.54h-6.78Z");
}
</style><path class="ljx1e_sqx"/>`,
		"fallback": "arcticons:frost-icon-pack",
	});
}

export default Component;
