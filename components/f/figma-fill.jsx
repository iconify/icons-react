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
		"content": `<style>.kfv8xnp-m {
  fill: currentColor;
  d: path("M15 2a4 4 0 0 1 2.646 7A4 4 0 0 1 13 15.465V18a4 4 0 1 1-6.646-3a4 4 0 0 1 0-6A4 4 0 0 1 9 2Z");
}
</style><path class="kfv8xnp-m"/>`,
		"fallback": "coolicons:figma-fill",
	});
}

export default Component;
