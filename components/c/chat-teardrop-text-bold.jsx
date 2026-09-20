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
		"content": `<style>.go8jbubji {
  fill: currentColor;
  d: path("M176 108a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h68a12 12 0 0 1 12 12m-12 28H96a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m72-12a104.11 104.11 0 0 1-104 104H48a20 20 0 0 1-20-20v-84a104 104 0 0 1 208 0m-24 0a80 80 0 0 0-160 0v80h80a80.09 80.09 0 0 0 80-80");
}
</style><path class="go8jbubji"/>`,
		"fallback": "ph:chat-teardrop-text-bold",
	});
}

export default Component;
