import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yuhbr1qrp {
  fill: currentColor;
  d: path("M162 80a6 6 0 0 1 6-6h72a6 6 0 0 1 0 12h-72a6 6 0 0 1-6-6m78 90h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0-64h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 32h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m-98-74v128a14 14 0 0 1-14 14H88a78 78 0 0 1-78-78.59C10.32 84.73 45.71 50 88.9 50H128a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H88.9C52.28 62 22.27 91.38 22 127.5A66 66 0 0 0 88 194h40a2 2 0 0 0 2-2Z");
}
</style><path class="yuhbr1qrp"/>`,
		"fallback": "ph:headlights-light",
	});
}

export default Component;
