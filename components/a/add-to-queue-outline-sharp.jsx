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
		"content": `<style>.kl3dvvb0z {
  fill: currentColor;
  d: path("M11.5 14.5h1v-3h3v-1h-3v-3h-1v3h-3v1h3zM9 20v-2H3V4h18v14h-6v2zm-5-3h16V5H4zm0 0V5z");
}
</style><path class="kl3dvvb0z"/>`,
		"fallback": "material-symbols-light:add-to-queue-outline-sharp",
	});
}

export default Component;
