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
		"content": `<style>.rvwqd3b5l {
  fill: currentColor;
  d: path("M3 17v-5.185a5 5 0 0 1 1.707-3.763l4-3.5a5 5 0 0 1 6.586 0l4 3.5A5 5 0 0 1 21 11.815V17a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5m5.293-5.293L12.586 16H11a1 1 0 0 0 0 2h4a.997.997 0 0 0 1-1v-4a1 1 0 0 0-2 0v1.586l-4.293-4.293a.999.999 0 1 0-1.414 1.414");
}
</style><path class="rvwqd3b5l"/>`,
		"fallback": "coolicons:house-arrow-down-right-fill-round",
	});
}

export default Component;
