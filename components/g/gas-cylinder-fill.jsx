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
		"content": `<style>.ao668acrb {
  fill: currentColor;
  d: path("M10 2h4a3 3 0 0 1 2.806 4.064A5.005 5.005 0 0 1 21 11v1H3v-1a5.005 5.005 0 0 1 4.194-4.936A3.002 3.002 0 0 1 10 2M9 4v2h6V4ZM3 14h18v3a3 3 0 0 1-3 3h-1v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1H6a3 3 0 0 1-3-3Z");
}
</style><path class="ao668acrb"/>`,
		"fallback": "coolicons:gas-cylinder-fill",
	});
}

export default Component;
