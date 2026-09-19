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
		"content": `<style>.uqw5j-jwl {
  fill: currentColor;
  d: path("M7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99M16 16H8V4h8z");
}
</style><path class="uqw5j-jwl"/>`,
		"fallback": "ic:baseline-settings-cell",
	});
}

export default Component;
