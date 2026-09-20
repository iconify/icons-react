import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wcgr73byu {
  fill: currentColor;
  d: path("M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2zm2.75 0a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75z");
}
</style><path class="wcgr73byu"/>`,
		"fallback": "fluent:book-default-20-filled",
	});
}

export default Component;
