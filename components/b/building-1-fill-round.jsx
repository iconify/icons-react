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
		"content": `<style>.lqn6o2rec {
  fill: currentColor;
  d: path("M3 19h1V7a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v2.303a3.83 3.83 0 0 1 3.707.99l2 2C19.665 13.252 20 14.683 20 16v3h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m8-12a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12h2v-3c0-1.317.335-2.748 1.293-3.707L11 10.586Z");
}
</style><path class="lqn6o2rec"/>`,
		"fallback": "coolicons:building-1-fill-round",
	});
}

export default Component;
