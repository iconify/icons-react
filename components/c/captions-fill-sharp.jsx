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
		"content": `<style>.pachrobei {
  fill: currentColor;
  d: path("M2 19V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1M7 9a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm8 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm-6 4H7a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m8 0h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2");
}
</style><path class="pachrobei"/>`,
		"fallback": "coolicons:captions-fill-sharp",
	});
}

export default Component;
