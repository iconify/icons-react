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
		"content": `<style>.o0r1fobsb {
  fill: currentColor;
  d: path("M2 7a5 5 0 0 1 5-5h1a1 1 0 0 1 0 2H7a3 3 0 0 0-3 3v1a1 1 0 0 1-2 0Zm15-5a5 5 0 0 1 5 5v1a1 1 0 0 1-2 0V7a3 3 0 0 0-3-3h-1a1 1 0 0 1 0-2ZM7 22a5 5 0 0 1-5-5v-1a1 1 0 0 1 2 0v1a3 3 0 0 0 3 3h1a1 1 0 0 1 0 2Zm15-5a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22h-1a1 1 0 0 1 0-2h1a3 3 0 0 0 3-3v-1a1 1 0 0 1 2 0Z");
}
</style><path class="o0r1fobsb"/>`,
		"fallback": "coolicons:fullscreen-bulk-round",
	});
}

export default Component;
