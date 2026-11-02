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
		"content": `<style>.fz_yl2vgp {
  fill: currentColor;
  d: path("M7 2h10a3 3 0 0 1 3 3v4H4V5a3 3 0 0 1 3-3m9 4a1 1 0 0 0-2 0v1a1 1 0 0 0 2 0Zm4 5v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8Zm-4 6v-3a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0");
}
</style><path class="fz_yl2vgp"/>`,
		"fallback": "coolicons:fridge-fill",
	});
}

export default Component;
