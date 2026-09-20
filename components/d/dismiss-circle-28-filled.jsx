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
		"content": `<style>.vbe633b2f {
  fill: currentColor;
  d: path("M26 14c0-6.627-5.373-12-12-12S2 7.373 2 14s5.373 12 12 12s12-5.373 12-12m-7.72-4.28a.75.75 0 0 1 0 1.06L15.06 14l3.22 3.22a.75.75 0 1 1-1.06 1.06L14 15.06l-3.22 3.22a.75.75 0 1 1-1.06-1.06L12.94 14l-3.22-3.22a.75.75 0 1 1 1.06-1.06L14 12.94l3.22-3.22a.75.75 0 0 1 1.06 0");
}
</style><path class="vbe633b2f"/>`,
		"fallback": "fluent:dismiss-circle-28-filled",
	});
}

export default Component;
