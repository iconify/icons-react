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
		"content": `<style>.ezkcbrr8q {
  fill: currentColor;
  d: path("M3 20.077V3h18v14H6.077zM5.65 16H20V4H4v13.644zM4 16V4zm2.5-2.5h7v-1h-7zm0-3h11v-1h-11zm0-3h11v-1h-11z");
}
</style><path class="ezkcbrr8q"/>`,
		"fallback": "material-symbols-light:chat-outline-sharp",
	});
}

export default Component;
