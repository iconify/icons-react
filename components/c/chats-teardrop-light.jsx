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
		"content": `<style>.af1s9_b_g {
  fill: currentColor;
  d: path("M168.16 74.42A78 78 0 0 0 18 104v64a14 14 0 0 0 14 14h56a78.15 78.15 0 0 0 72 48h64a14 14 0 0 0 14-14v-64a78 78 0 0 0-69.84-77.58M30 168v-64a66 66 0 1 1 66 66H32a2 2 0 0 1-2-2m196 48a2 2 0 0 1-2 2h-64a66.13 66.13 0 0 1-58.89-36.19a77.92 77.92 0 0 0 71-94.68A66 66 0 0 1 226 152Z");
}
</style><path class="af1s9_b_g"/>`,
		"fallback": "ph:chats-teardrop-light",
	});
}

export default Component;
