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
		"content": `<style>.t246jdb6i {
  fill: currentColor;
  d: path("M13 16v5a1.002 1.002 0 0 1-1.707.707l-6-6A1 1 0 0 1 5 15V9a1 1 0 0 1 1-1h3.586L5.293 3.707A1 1 0 0 1 6 2h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3.586l4.293 4.293A1 1 0 0 1 18 16Z");
}
</style><path class="t246jdb6i"/>`,
		"fallback": "coolicons:framer-fill-round",
	});
}

export default Component;
