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
		"content": `<style>.qf12pkbcc {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m11-3V7a1 1 0 0 0-2 0v5a1 1 0 0 0 1.8.6l3-4a1 1 0 0 0-1.6-1.2Z");
}
</style><path class="qf12pkbcc"/>`,
		"fallback": "coolicons:clock-1-fill-sharp",
	});
}

export default Component;
