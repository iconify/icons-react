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
		"content": `<style>.wm9p3xbrq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.745 34.569l7.64-6.992h-6.392l7.365-11.97l13.791 24.54H5.851L24 7.853");
}
</style><path class="wm9p3xbrq"/>`,
		"fallback": "arcticons:delta-force",
	});
}

export default Component;
