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
		"content": `<style>.ylurz2b1s {
  fill: currentColor;
  d: path("M7.22 2.22a.75.75 0 0 1 1.06 0l2.75 2.75a.75.75 0 1 1-1.06 1.06L8.5 4.56v8.69a.75.75 0 0 1-1.5 0V4.56L5.53 6.03a.75.75 0 0 1-1.06-1.06z");
}
</style><path class="ylurz2b1s"/>`,
		"fallback": "fluent:arrow-sort-up-16-filled",
	});
}

export default Component;
