import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cmdkduzew {
  fill: currentColor;
  d: path("M4 19V9l3.23 2.423l4.962-6.98L16.654 8H20v11zm4-2l4-5.5l7 5.45V9h-2.7l-3.9-3.125l-4.95 6.95L5 11v3.6z");
}
</style><path class="cmdkduzew"/>`,
		"fallback": "material-symbols-light:area-chart-outline-sharp",
	});
}

export default Component;
