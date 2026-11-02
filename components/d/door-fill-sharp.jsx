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
		"content": `<style>.qygeugb9o {
  fill: currentColor;
  d: path("M5 20V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17h2a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm9.01-9H14a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="qygeugb9o"/>`,
		"fallback": "coolicons:door-fill-sharp",
	});
}

export default Component;
