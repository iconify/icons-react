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
		"content": `<style>.fw2f_9b5a {
  fill: currentColor;
  d: path("M19 5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-2a3 3 0 1 0-6 0v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z");
}
</style><path class="fw2f_9b5a"/>`,
		"fallback": "coolicons:bridge-fill",
	});
}

export default Component;
