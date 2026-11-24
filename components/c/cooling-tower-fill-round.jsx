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
		"content": `<style>.c5csp__tk {
  fill: currentColor;
  d: path("M10.8 3.599A4 4 0 0 1 18 6a1 1 0 0 1-2 0a2 2 0 1 0-4 0a1 1 0 0 1-2 0a.997.997 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 1-2 0a3 3 0 0 1 4.8-2.401M8 9h8a1.002 1.002 0 0 1 .831 1.557c-.301.448-.484.969-.61 1.491A8.3 8.3 0 0 0 16 14c.001 2.405 1.522 4.548 3.341 6H21a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h1.659c1.819-1.452 3.34-3.595 3.341-6a8.3 8.3 0 0 0-.221-1.952c-.126-.522-.309-1.043-.61-1.491A1 1 0 0 1 8 9");
}
</style><path class="c5csp__tk"/>`,
		"fallback": "coolicons:cooling-tower-fill-round",
	});
}

export default Component;
