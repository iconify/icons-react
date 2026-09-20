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
		"content": `<style>.wqvk_g9kf {
  fill: currentColor;
  d: path("M4 8h16V6H4zM2 20V4h20v8H4v6h4.1v2zm12.95 2l-4.25-4.25l1.4-1.4l2.85 2.8l5.65-5.65l1.4 1.45zM4 18v-4.5v2.825V6z");
}
</style><path class="wqvk_g9kf"/>`,
		"fallback": "material-symbols:credit-score-outline-sharp",
	});
}

export default Component;
