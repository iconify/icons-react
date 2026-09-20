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
		"content": `<style>.lmh8bj-jm {
  fill: currentColor;
  d: path("M7.78 5.72a.75.75 0 0 1 0 1.06L5.56 9h8.88l-2.22-2.22a.75.75 0 0 1 1.06-1.06l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06l2.22-2.22H5.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0");
}
</style><path class="lmh8bj-jm"/>`,
		"fallback": "fluent:arrow-bidirectional-left-right-20-filled",
	});
}

export default Component;
