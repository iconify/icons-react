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
		"content": `<style>.y57y41otd {
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 10;
  d: path("M41.55 12h-2.61v-1.7A2 2 0 0 0 37 8.32H11a2 2 0 0 0-1.95 1.95V12h-2.6a2 2 0 0 0-1.95 1.92v22.81a2 2 0 0 0 2 2h35.1a2 2 0 0 0 2-2V13.92A2 2 0 0 0 41.55 12Zm-6.4 10.56a2 2 0 0 1-1.95 1.95H14.8a2 2 0 0 1-2-1.95V20a2 2 0 0 1 2-1.95h18.4A2 2 0 0 1 35.15 20ZM9.06 12h29.88");
}
</style><path class="y57y41otd"/>`,
		"fallback": "arcticons:cabinet",
	});
}

export default Component;
