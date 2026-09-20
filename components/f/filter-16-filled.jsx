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
		"content": `<style>.gkh4pm7ot {
  fill: currentColor;
  d: path("M1.75 3.75A.75.75 0 0 1 2.5 3h11a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.75-.75m2 4A.75.75 0 0 1 4.5 7h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m2 4A.75.75 0 0 1 6.5 11h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75");
}
</style><path class="gkh4pm7ot"/>`,
		"fallback": "fluent:filter-16-filled",
	});
}

export default Component;
