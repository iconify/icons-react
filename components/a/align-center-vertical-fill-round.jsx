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
		"content": `<style>.lpg1m5ble {
  fill: currentColor;
  d: path("M11 7v2H3V7a4 4 0 0 1 8 0m10 2h-8a4 4 0 0 1 8 0M3 11h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m0 4h8v2a4 4 0 0 1-8 0Zm10 0h8a4 4 0 0 1-8 0");
}
</style><path class="lpg1m5ble"/>`,
		"fallback": "coolicons:align-center-vertical-fill-round",
	});
}

export default Component;
