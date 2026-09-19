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
		"content": `<style>.o2zhojb-q {
  fill: currentColor;
  d: path("M3 21h18v-2H3zM3 8v8l4-4zm8 9h10v-2H11zM3 3v2h18V3zm8 6h10V7H11zm0 4h10v-2H11z");
}
</style><path class="o2zhojb-q"/>`,
		"fallback": "ic:format-indent-increase",
	});
}

export default Component;
