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
		"content": `<style>.m8e21kbff {
  fill: currentColor;
  d: path("M21 22H3a1 1 0 0 1 0-2h2V7a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v13h2a1 1 0 0 1 0 2m-6.99-11H14a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="m8e21kbff"/>`,
		"fallback": "coolicons:door-fill-round",
	});
}

export default Component;
