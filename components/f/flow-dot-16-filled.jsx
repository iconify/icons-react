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
		"content": `<style>.h6niyu1wm {
  fill: currentColor;
  d: path("M3.5 2.25c.555 0 1.038.302 1.298.75h6.452a2.75 2.75 0 1 1 0 5.5h-6.5a1.25 1.25 0 1 0 0 2.5h6.452a1.498 1.498 0 0 1 2.798.75a1.5 1.5 0 0 1-2.798.75H4.75a2.75 2.75 0 1 1 0-5.5h6.5a1.25 1.25 0 1 0 0-2.5H4.798A1.498 1.498 0 0 1 2 3.75a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="h6niyu1wm"/>`,
		"fallback": "fluent:flow-dot-16-filled",
	});
}

export default Component;
