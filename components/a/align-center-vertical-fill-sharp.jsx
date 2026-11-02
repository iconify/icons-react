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
		"content": `<style>.nk6l0uy1j {
  fill: currentColor;
  d: path("M3 9V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5Zm18 0h-8V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1ZM3 11h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m0 4h8v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm18 0v3a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-3Z");
}
</style><path class="nk6l0uy1j"/>`,
		"fallback": "coolicons:align-center-vertical-fill-sharp",
	});
}

export default Component;
