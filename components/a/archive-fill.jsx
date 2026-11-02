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
		"content": `<style>.qrd1trbms {
  fill: currentColor;
  d: path("M5 3h14a3 3 0 0 1 1 5.829V18a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8.829A3.001 3.001 0 0 1 5 3m1 6v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9Zm8 2a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Z");
}
</style><path class="qrd1trbms"/>`,
		"fallback": "coolicons:archive-fill",
	});
}

export default Component;
