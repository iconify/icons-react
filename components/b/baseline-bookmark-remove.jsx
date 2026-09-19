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
		"content": `<style>.ynan52bvw {
  fill: currentColor;
  d: path("M21 7h-6V5h6zm-2 3.9A5.002 5.002 0 0 1 14 3H7c-1.1 0-2 .9-2 2v16l7-3l7 3z");
}
</style><path class="ynan52bvw"/>`,
		"fallback": "ic:baseline-bookmark-remove",
	});
}

export default Component;
