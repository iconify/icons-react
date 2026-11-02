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
		"content": `<style>.ad0u0jetp {
  fill: currentColor;
  d: path("M21 3a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2ZM9 8h6a4 4 0 0 1 0 8H9a4 4 0 0 1 0-8m12 11a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><path class="ad0u0jetp"/>`,
		"fallback": "coolicons:distribute-vertical-fill-round",
	});
}

export default Component;
