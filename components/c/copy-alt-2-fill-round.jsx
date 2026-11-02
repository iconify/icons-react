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
		"content": `<style>.eko1wh1jk {
  fill: currentColor;
  d: path("M11 2h6a5 5 0 0 1 5 5v6a3 3 0 0 1-3 3a1 1 0 0 1 0-2a1 1 0 0 0 1-1V7a3 3 0 0 0-3-3h-6a.997.997 0 0 0-1 1a1 1 0 0 1-2 0a3 3 0 0 1 3-3M2 13a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5Z");
}
</style><path class="eko1wh1jk"/>`,
		"fallback": "coolicons:copy-alt-2-fill-round",
	});
}

export default Component;
