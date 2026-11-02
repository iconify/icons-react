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
		"content": `<style>.h2aby4v6y {
  fill: currentColor;
  d: path("M5.414 8H17a5 5 0 0 1 5 5v2a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 20h-6a1 1 0 0 1 0-2h6a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H5.414l2.293 2.293a.999.999 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a.999.999 0 1 1 1.414 1.414Z");
}
</style><path class="h2aby4v6y"/>`,
		"fallback": "coolicons:arrow-u-turn-up-left-fill-round",
	});
}

export default Component;
