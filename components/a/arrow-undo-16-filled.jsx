import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yugeuebcs {
  fill: currentColor;
  d: path("M3 2.75a.75.75 0 0 1 1.5 0v3.095l2.673-2.673a4 4 0 0 1 5.657 5.656l-4.95 4.95a.75.75 0 1 1-1.06-1.06l4.95-4.95a2.5 2.5 0 0 0-3.536-3.536L5.966 6.5H8.25a.75.75 0 0 1 0 1.5h-4.4A.85.85 0 0 1 3 7.15z");
}
</style><path class="yugeuebcs"/>`,
		"fallback": "fluent:arrow-undo-16-filled",
	});
}

export default Component;
