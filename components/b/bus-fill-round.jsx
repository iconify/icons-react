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
		"content": `<style>.ygx4bmb1i {
  fill: currentColor;
  d: path("M20 7v10c0 1.27-.803 2.405-2 2.829V21a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1h-4v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1.171A3 3 0 0 1 4 17V7a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5m-5-3H9a3 3 0 0 0-3 3v5h12V7a3 3 0 0 0-3-3M9 5h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2M8 15a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm8.01 0H16a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="ygx4bmb1i"/>`,
		"fallback": "coolicons:bus-fill-round",
	});
}

export default Component;
