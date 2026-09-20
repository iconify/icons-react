import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s9gljrbck {
  fill: currentColor;
  d: path("M120 60a8 8 0 1 1 8 8a8 8 0 0 1-8-8m8 60a8 8 0 1 0 8 8a8 8 0 0 0-8-8m0 68a8 8 0 1 0 8 8a8 8 0 0 0-8-8");
}
</style><path class="s9gljrbck"/>`,
		"fallback": "ph:dots-three-vertical-thin",
	});
}

export default Component;
