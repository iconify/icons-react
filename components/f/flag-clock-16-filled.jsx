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
		"content": `<style>.llh1cftfy {
  fill: currentColor;
  d: path("M4 10h2.207a5.5 5.5 0 0 1 4.917-3.987L11.114 6l2.293-3.21A.5.5 0 0 0 13 2H3.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0zm12 1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M11.5 9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H13a.5.5 0 0 0 0-1h-1V9.5a.5.5 0 0 0-.5-.5");
}
</style><path class="llh1cftfy"/>`,
		"fallback": "fluent:flag-clock-16-filled",
	});
}

export default Component;
