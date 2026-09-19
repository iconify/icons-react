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
		"content": `<style>.j0rbx7bat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.604 24L4.5 8.267h26.942L43.5 24zL4.5 39.733h26.942L43.5 24");
}
</style><path class="j0rbx7bat"/>`,
		"fallback": "arcticons:cimb-th",
	});
}

export default Component;
