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
		"content": `<style>.sizb5qbsh {
  fill: currentColor;
  d: path("M3 19v-8.092c0-.866.373-1.689 1.024-2.258l6-5.25a3 3 0 0 1 3.952 0l6 5.25A3 3 0 0 1 21 10.908V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3m6.236-7.168A3 3 0 0 0 9 13a1 1 0 0 0 2 0a1.001 1.001 0 0 1 1.707-.707a1 1 0 0 1 .215 1.094A.99.99 0 0 1 12 14a1 1 0 0 0 0 2a3 3 0 1 0-2.764-4.168M12.01 17H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="sizb5qbsh"/>`,
		"fallback": "coolicons:house-help-fill",
	});
}

export default Component;
