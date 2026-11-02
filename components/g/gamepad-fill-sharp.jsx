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
		"content": `<style>.dw-9df6gv {
  fill: currentColor;
  d: path("M2 19V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m9-10a1 1 0 0 0-2 0v2H7a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2Zm7 0a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm-1.99 4H16a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="dw-9df6gv"/>`,
		"fallback": "coolicons:gamepad-fill-sharp",
	});
}

export default Component;
