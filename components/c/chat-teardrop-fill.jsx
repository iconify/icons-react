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
		"content": `<style>.pgu-1xuht {
  fill: currentColor;
  d: path("M232 124a100.11 100.11 0 0 1-100 100H48a16 16 0 0 1-16-16v-84a100 100 0 0 1 200 0");
}
</style><path class="pgu-1xuht"/>`,
		"fallback": "ph:chat-teardrop-fill",
	});
}

export default Component;
