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
		"content": `<style>.udd7sr0oi {
  fill: currentColor;
  d: path("M15 5H7a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h4a1 1 0 0 1 0 2H7a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a3 3 0 0 1 3 3a1 1 0 0 1-2 0a1 1 0 0 0-1-1m-1 8a4 4 0 0 1 8 0v4a4 4 0 0 1-8 0Z");
}
</style><path class="udd7sr0oi"/>`,
		"fallback": "coolicons:devices-fill-round",
	});
}

export default Component;
