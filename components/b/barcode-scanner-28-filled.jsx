import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dut4tmbjy {
  fill: currentColor;
  d: path("M3 19a1 1 0 0 1 1 1v1a2 2 0 0 0 2 2h1a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4v-1a1 1 0 0 1 1-1m22 0a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4h-1a1 1 0 1 1 0-2h1a2 2 0 0 0 2-2v-1a1 1 0 0 1 1-1M7 8a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m4.75 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m4.5 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1M21 8a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1M7 3a1 1 0 0 1 0 2H6a2 2 0 0 0-2 2v1a1 1 0 0 1-2 0V7a4 4 0 0 1 4-4zm15 0a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V7a2 2 0 0 0-2-2h-1a1 1 0 1 1 0-2z");
}
</style><path class="dut4tmbjy"/>`,
		"fallback": "fluent:barcode-scanner-28-filled",
	});
}

export default Component;
