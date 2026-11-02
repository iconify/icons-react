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
		"content": `<style>.n15k4ibhg {
  fill: currentColor;
  d: path("M4 20V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v15h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2ZM8.01 6H8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M12 6a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm4 0a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm-7.99 4H8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m4 0H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m4 0H16a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M15 19v-2a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0");
}
</style><path class="n15k4ibhg"/>`,
		"fallback": "coolicons:hotel-fill",
	});
}

export default Component;
