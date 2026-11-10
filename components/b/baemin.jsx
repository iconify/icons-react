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
		"content": `<style>.o2z7_3bcx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.37 4.5v9.435m0 9.124V34.21M34.63 17.7V4.5m0 22.804V43.5M24 4.5v39");
}
</style><path class="o2z7_3bcx"/>`,
		"fallback": "arcticons:baemin",
	});
}

export default Component;
