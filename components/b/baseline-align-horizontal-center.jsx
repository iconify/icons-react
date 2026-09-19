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
		"content": `<style>.i82zxjp8v {
  fill: currentColor;
  d: path("M11 2h2v5h8v3h-8v4h5v3h-5v5h-2v-5H6v-3h5v-4H3V7h8z");
}
</style><path class="i82zxjp8v"/>`,
		"fallback": "ic:baseline-align-horizontal-center",
	});
}

export default Component;
