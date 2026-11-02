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
		"content": `<style>.vr6scdcse {
  fill: currentColor;
  d: path("M3 9V6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v3Zm18 0h-8V8a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3ZM3 11h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m0 4h8v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm18 1a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-1h8Z");
}
</style><path class="vr6scdcse"/>`,
		"fallback": "coolicons:align-center-vertical-fill",
	});
}

export default Component;
