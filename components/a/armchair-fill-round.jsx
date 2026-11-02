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
		"content": `<style>.n-wtnuboc {
  fill: currentColor;
  d: path("M19 8.171A3 3 0 0 1 21 11v3a4.99 4.99 0 0 1-2 4.001V20a1 1 0 0 1-2 0v-1.099A5 5 0 0 1 16 19H8a5 5 0 0 1-1-.099V20a1 1 0 0 1-2 0v-1.999A4.99 4.99 0 0 1 3 14v-3c0-1.27.803-2.405 2-2.829V8a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5Zm-12 0A3 3 0 0 1 9 11a.997.997 0 0 0 1 1h4a.997.997 0 0 0 1-1a3 3 0 0 1 2-2.829V8a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Z");
}
</style><path class="n-wtnuboc"/>`,
		"fallback": "coolicons:armchair-fill-round",
	});
}

export default Component;
