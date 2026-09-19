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
		"content": `<style>.pv6x4hbwo {
  fill: currentColor;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M7 7h7v2H7zm0 3h7v2H7zm3 5H7v-2h3zm4.05 3.36l-2.83-2.83l1.41-1.41l1.41 1.41L17.59 12L19 13.41z");
}
</style><path class="pv6x4hbwo"/>`,
		"fallback": "ic:baseline-playlist-add-check-circle",
	});
}

export default Component;
