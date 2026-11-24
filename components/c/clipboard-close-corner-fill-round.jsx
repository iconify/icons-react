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
		"content": `<style>.a14-0thmn {
  fill: currentColor;
  d: path("M15.854 4.072A5.005 5.005 0 0 1 20 9a1 1 0 0 1-2 0a3.01 3.01 0 0 0-2.21-2.896A3 3 0 0 1 13 8h-2a3 3 0 0 1-2.79-1.896A3.01 3.01 0 0 0 6 9v8a3 3 0 0 0 3 3a1 1 0 0 1 0 2a5 5 0 0 1-3.536-1.464A4.98 4.98 0 0 1 4 17V9a5.006 5.006 0 0 1 4.146-4.928A3.005 3.005 0 0 1 11 2h2c1.298 0 2.451.838 2.854 2.072m-1.147 9.221L17 15.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L18.414 17l2.293 2.293a.999.999 0 1 1-1.414 1.414L17 18.414l-2.293 2.293a.999.999 0 1 1-1.414-1.414L15.586 17l-2.293-2.293a.999.999 0 1 1 1.414-1.414");
}
</style><path class="a14-0thmn"/>`,
		"fallback": "coolicons:clipboard-close-corner-fill-round",
	});
}

export default Component;
