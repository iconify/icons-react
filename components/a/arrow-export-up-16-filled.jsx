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
		"content": `<style>.fmry50b_l {
  fill: currentColor;
  d: path("M3 14.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75m.97-9.53a.75.75 0 1 0 1.06 1.06l2.22-2.22v7.69a.75.75 0 0 0 1.5 0V3.56l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0z");
}
</style><path class="fmry50b_l"/>`,
		"fallback": "fluent:arrow-export-up-16-filled",
	});
}

export default Component;
