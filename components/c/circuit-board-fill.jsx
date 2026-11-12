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
		"content": `<style>.fuyi5rb1j {
  fill: currentColor;
  d: path("M16 2v5a.997.997 0 0 1-1 1h-3.171a3 3 0 1 0 0 2H15a3 3 0 0 0 3-3V2h1a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H8v-5a.997.997 0 0 1 1-1h3.171a3 3 0 1 0 0-2H9a3 3 0 0 0-3 3v5H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z");
}
</style><path class="fuyi5rb1j"/>`,
		"fallback": "coolicons:circuit-board-fill",
	});
}

export default Component;
