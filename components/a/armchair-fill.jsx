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
		"content": `<style>.ciqmf2bac {
  fill: currentColor;
  d: path("M5 8.171V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2.171A3 3 0 0 1 21 11v5c0 1.27-.803 2.405-2 2.829V20a1 1 0 0 1-2 0v-1H7v1a1 1 0 0 1-2 0v-1.171A3 3 0 0 1 3 16v-5c0-1.27.803-2.405 2-2.829M17 6a1 1 0 0 0-1-1H8a.997.997 0 0 0-1 1v2.171A3 3 0 0 1 9 11a.997.997 0 0 0 1 1h4a.997.997 0 0 0 1-1a3 3 0 0 1 2-2.829Z");
}
</style><path class="ciqmf2bac"/>`,
		"fallback": "coolicons:armchair-fill",
	});
}

export default Component;
