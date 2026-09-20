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
		"content": `<style>.rnfp5p4vo {
  fill: currentColor;
  d: path("M3 20.077V3h18v14H6.077zM6.5 13.5h7v-1h-7zm0-3h11v-1h-11zm0-3h11v-1h-11z");
}
</style><path class="rnfp5p4vo"/>`,
		"fallback": "material-symbols-light:chat-sharp",
	});
}

export default Component;
