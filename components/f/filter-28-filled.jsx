import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s1huxebki {
  fill: currentColor;
  d: path("M17 19a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2zm4-6a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zm3-6a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z");
}
</style><path class="s1huxebki"/>`,
		"fallback": "fluent:filter-28-filled",
	});
}

export default Component;
