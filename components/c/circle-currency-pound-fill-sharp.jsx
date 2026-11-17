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
		"content": `<style>.sn0hvfm-j {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m7-2v1H8a1 1 0 0 0 0 2h1v2H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-5v-2h2a1 1 0 0 0 0-2h-2v-1a2 2 0 0 1 4 0a1 1 0 0 0 2 0a4 4 0 0 0-8 0");
}
</style><path class="sn0hvfm-j"/>`,
		"fallback": "coolicons:circle-currency-pound-fill-sharp",
	});
}

export default Component;
