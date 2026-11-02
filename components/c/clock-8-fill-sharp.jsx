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
		"content": `<style>.pxkkocc_d {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m11 0V7a1 1 0 0 0-2 0v4.5l-3.6 2.7a1 1 0 0 0 1.2 1.6l4-3a1 1 0 0 0 .4-.8");
}
</style><path class="pxkkocc_d"/>`,
		"fallback": "coolicons:clock-8-fill-sharp",
	});
}

export default Component;
