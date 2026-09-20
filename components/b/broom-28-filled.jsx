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
		"content": `<style>.ws4fs8bzh {
  fill: currentColor;
  d: path("M25.78 2.22a.75.75 0 0 1 0 1.06l-8.256 8.257a6.75 6.75 0 0 1-.499 8.983l-.22.225l-9.55-9.55l.224-.22a6.75 6.75 0 0 1 8.984-.5L24.72 2.22a.75.75 0 0 1 1.06 0M6.046 12.107L2.359 14.36a.75.75 0 0 0-.14 1.17l10.25 10.25a.75.75 0 0 0 1.171-.139l2.253-3.687z");
}
</style><path class="ws4fs8bzh"/>`,
		"fallback": "fluent:broom-28-filled",
	});
}

export default Component;
