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
		"content": `<style>.rpot6h5af {
  fill: currentColor;
  d: path("M9 2v4a1 1 0 0 0 2 0V2h2v4a1 1 0 0 0 2 0V2h1a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-1v4a3 3 0 1 1-6 0v-4H8a3.004 3.004 0 0 1-3-3V5a3 3 0 0 1 3-3ZM7 12a.997.997 0 0 0 1 1h2a1 1 0 0 1 1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-1H7Z");
}
</style><path class="rpot6h5af"/>`,
		"fallback": "coolicons:brush-fill",
	});
}

export default Component;
