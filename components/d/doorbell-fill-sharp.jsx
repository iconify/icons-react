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
		"content": `<style>.o5a3sxb0v {
  fill: currentColor;
  d: path("M5 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Zm9 4h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m-5 7a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><path class="o5a3sxb0v"/>`,
		"fallback": "coolicons:doorbell-fill-sharp",
	});
}

export default Component;
