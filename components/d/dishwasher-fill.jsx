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
		"content": `<style>.rduel1bnq {
  fill: currentColor;
  d: path("M6 2h12a3 3 0 0 1 3 3v3H3V5a3 3 0 0 1 3-3m2.01 3H8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M11 5a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm10 5v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-9Zm-5 2H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2");
}
</style><path class="rduel1bnq"/>`,
		"fallback": "coolicons:dishwasher-fill",
	});
}

export default Component;
