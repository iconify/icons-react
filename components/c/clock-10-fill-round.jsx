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
		"content": `<style>.w41lk14vc {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m11 0V7a1 1 0 0 0-2 0v3L8.6 8.2a1 1 0 0 0-1.2 1.6l4 3A.999.999 0 0 0 13 12");
}
</style><path class="w41lk14vc"/>`,
		"fallback": "coolicons:clock-10-fill-round",
	});
}

export default Component;
