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
		"content": `<style>.t-3hb8biz {
  fill: currentColor;
  d: path("M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm6.01 2H8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m8 0H16a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M12 11a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm-3.99 4H8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M16 15a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="t-3hb8biz"/>`,
		"fallback": "coolicons:dice-fill",
	});
}

export default Component;
