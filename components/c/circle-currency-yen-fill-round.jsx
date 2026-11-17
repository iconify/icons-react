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
		"content": `<style>.boiz0lbfi {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m7.707-5.707a.999.999 0 1 0-1.414 1.414L11 10.414V11H9a1 1 0 0 0 0 2h2v2H9a1 1 0 0 0 0 2h2a1 1 0 0 0 2 0h2a1 1 0 0 0 0-2h-2v-2h2a1 1 0 0 0 0-2h-2v-.586l2.707-2.707a.999.999 0 1 0-1.414-1.414L12 8.586Z");
}
</style><path class="boiz0lbfi"/>`,
		"fallback": "coolicons:circle-currency-yen-fill-round",
	});
}

export default Component;
