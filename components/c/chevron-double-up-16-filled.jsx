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
		"content": `<style>.x9nwfjcyd {
  fill: currentColor;
  d: path("M8 7c.199 0 .39.08.53.22l4.25 4.25a.75.75 0 0 1-1.06 1.06L8 8.81l-3.72 3.72a.75.75 0 1 1-1.06-1.06l4.25-4.25A.75.75 0 0 1 8 7m0-4.5c.199 0 .39.08.53.22l4.25 4.25a.75.75 0 0 1-1.06 1.06L8 4.31L4.28 8.03a.75.75 0 1 1-1.06-1.06l4.25-4.25A.75.75 0 0 1 8 2.5");
}
</style><path class="x9nwfjcyd"/>`,
		"fallback": "fluent:chevron-double-up-16-filled",
	});
}

export default Component;
