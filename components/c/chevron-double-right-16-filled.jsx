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
		"content": `<style>.szcoycbjs {
  fill: currentColor;
  d: path("M3.47 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L7.19 8L3.47 4.28a.75.75 0 0 1 0-1.06m4.5 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.69 8L7.97 4.28a.75.75 0 0 1 0-1.06");
}
</style><path class="szcoycbjs"/>`,
		"fallback": "fluent:chevron-double-right-16-filled",
	});
}

export default Component;
