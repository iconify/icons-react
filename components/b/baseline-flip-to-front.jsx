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
		"content": `<style>.qr5tmbc9m {
  fill: currentColor;
  d: path("M3 13h2v-2H3zm0 4h2v-2H3zm2 4v-2H3a2 2 0 0 0 2 2M3 9h2V7H3zm12 12h2v-2h-2zm4-18H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 12H9V5h10zm-8 6h2v-2h-2zm-4 0h2v-2H7z");
}
</style><path class="qr5tmbc9m"/>`,
		"fallback": "ic:baseline-flip-to-front",
	});
}

export default Component;
