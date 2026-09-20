import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dpn8qwqou {
  fill: currentColor;
  d: path("M248 120h-24.3A104 104 0 0 0 16 128v24a72.08 72.08 0 0 0 72 72h40a72.08 72.08 0 0 0 72-72v-16h48a8 8 0 0 0 0-16M88 180a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96-28a56.06 56.06 0 0 1-50.46 55.72A71.87 71.87 0 0 0 160 152v-16h24Z");
}
</style><path class="dpn8qwqou"/>`,
		"fallback": "ph:baseball-helmet-fill",
	});
}

export default Component;
