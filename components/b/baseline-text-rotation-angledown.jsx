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
		"content": `<style>.sfg0s7_ad {
  fill: currentColor;
  d: path("m19.4 4.91l-1.06-1.06L7.2 8.27l1.48 1.48l2.19-.92l3.54 3.54l-.92 2.19l1.48 1.48zm-6.81 3.1l4.87-2.23l-2.23 4.87zM14.27 21v-4.24l-1.41 1.41l-8.84-8.84l-1.42 1.42l8.84 8.84L10.03 21z");
}
</style><path class="sfg0s7_ad"/>`,
		"fallback": "ic:baseline-text-rotation-angledown",
	});
}

export default Component;
