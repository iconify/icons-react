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
		"content": `<style>.hzzhhh4ds {
  fill: currentColor;
  d: path("M4 7a3 3 0 0 0 3-3V3a1 1 0 0 1 2 0v1a5 5 0 0 1-5 5H3a1 1 0 0 1 0-2Zm13-3a3 3 0 0 0 3 3h1a1 1 0 0 1 0 2h-1a5 5 0 0 1-5-5V3a1 1 0 0 1 2 0ZM7 20a3 3 0 0 0-3-3H3a1 1 0 0 1 0-2h1a5 5 0 0 1 5 5v1a1 1 0 0 1-2 0Zm13-3a3 3 0 0 0-3 3v1a1 1 0 0 1-2 0v-1c0-1.326.527-2.598 1.464-3.536A5 5 0 0 1 20 15h1a1 1 0 0 1 0 2Z");
}
</style><path class="hzzhhh4ds"/>`,
		"fallback": "coolicons:fullscreen-exit-fill-round",
	});
}

export default Component;
