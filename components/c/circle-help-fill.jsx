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
		"content": `<style>.mp30w0h8o {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m6-1a1 1 0 0 0 2 0a2 2 0 1 1 2 2a1 1 0 0 0 0 2a4 4 0 1 0-4-4m4 5a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="mp30w0h8o"/>`,
		"fallback": "coolicons:circle-help-fill",
	});
}

export default Component;
