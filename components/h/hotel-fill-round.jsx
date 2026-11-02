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
		"content": `<style>.vs0d6y-st {
  fill: currentColor;
  d: path("M4 20V7a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v13h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2ZM8.01 6H8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M12 6a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm4 0a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm-7.99 4H8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m4 0H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m4 0H16a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M15 19v-2a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0");
}
</style><path class="vs0d6y-st"/>`,
		"fallback": "coolicons:hotel-fill-round",
	});
}

export default Component;
