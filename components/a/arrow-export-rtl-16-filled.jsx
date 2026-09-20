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
		"content": `<style>.h9oglsbdu {
  fill: currentColor;
  d: path("M14.25 3a.75.75 0 0 0-.75.75v8.5a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-.75-.75m-8.47.72a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 0 0 1.06-1.06L3.56 8.5h7.69a.75.75 0 0 0 0-1.5H3.56l2.22-2.22a.75.75 0 0 0 0-1.06");
}
</style><path class="h9oglsbdu"/>`,
		"fallback": "fluent:arrow-export-rtl-16-filled",
	});
}

export default Component;
