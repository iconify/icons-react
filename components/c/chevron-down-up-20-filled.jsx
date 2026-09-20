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
		"content": `<style>.l54-o1bxz {
  fill: currentColor;
  d: path("M6.28 2.97a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L10 6.69zm8.5 13l-4.25-4.25a.75.75 0 0 0-1.06 0l-4.25 4.25a.75.75 0 1 0 1.06 1.06L10 13.31l3.72 3.72a.75.75 0 1 0 1.06-1.06");
}
</style><path class="l54-o1bxz"/>`,
		"fallback": "fluent:chevron-down-up-20-filled",
	});
}

export default Component;
