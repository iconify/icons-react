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
		"content": `<style>.qx4an3bse {
  fill: currentColor;
  d: path("M16 2v6h-4.171a3 3 0 1 0 0 2H17a1 1 0 0 0 1-1V2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H8v-6h4.171a3 3 0 1 0 0-2H7a1 1 0 0 0-1 1v7H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z");
}
</style><path class="qx4an3bse"/>`,
		"fallback": "coolicons:circuit-board-fill-sharp",
	});
}

export default Component;
