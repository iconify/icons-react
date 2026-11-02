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
		"content": `<style>.m5_5al_xm {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m9 4h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v1.586L9.707 8.293a.999.999 0 1 0-1.414 1.414L12.586 14H11a1 1 0 0 0 0 2");
}
</style><path class="m5_5al_xm"/>`,
		"fallback": "coolicons:circle-arrow-down-right-fill",
	});
}

export default Component;
