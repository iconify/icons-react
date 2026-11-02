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
		"content": `<style>.fvssu2bzd {
  fill: currentColor;
  d: path("M17 22H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2h1a1 1 0 0 1 0 2h-1v6h1a1 1 0 0 1 0 2h-1v2a3 3 0 0 1-3 3M8 10a4 4 0 1 0 8 0a4 4 0 0 0-8 0m-.901 10h9.802a5.003 5.003 0 0 0-9.802 0");
}
</style><path class="fvssu2bzd"/>`,
		"fallback": "coolicons:contacts-fill",
	});
}

export default Component;
