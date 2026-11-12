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
		"content": `<style>.m906m3q0d {
  fill: currentColor;
  d: path("M6 8V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4h4V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2c0 .49.587 1.337.877 1.753c.765 1.096 1.616 2.135 2.258 3.312c.491.898.865 1.899.865 2.935a4 4 0 0 1-8 0v-4h-4v4a4 4 0 0 1-8 0c0-1.036.374-2.037.865-2.935c.642-1.177 1.493-2.216 2.258-3.312C5.413 9.337 6 8.49 6 8m1.402 9.426l.022-.022l.002-.002a2 2 0 1 0-.025.025m9.197.001l.002.002a2 2 0 0 0 2.826-.028l.002-.002a2 2 0 1 0-2.83.028");
}
</style><path class="m906m3q0d"/>`,
		"fallback": "coolicons:binoculars-fill-sharp",
	});
}

export default Component;
