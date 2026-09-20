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
		"content": `<style>.n5hshdcgm {
  fill: currentColor;
  d: path("M4.22 6.53a.75.75 0 0 0 1.06 0L8 3.81l2.72 2.72a.75.75 0 1 0 1.06-1.06L8.53 2.22a.75.75 0 0 0-1.06 0L4.22 5.47a.75.75 0 0 0 0 1.06m0 2.94a.75.75 0 0 1 1.06 0L8 12.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 0-1.06");
}
</style><path class="n5hshdcgm"/>`,
		"fallback": "fluent:chevron-up-down-16-filled",
	});
}

export default Component;
