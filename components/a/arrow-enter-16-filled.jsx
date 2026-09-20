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
		"content": `<style>.j5udwcc0k {
  fill: currentColor;
  d: path("M6.75 1.5a.75.75 0 0 0 0 1.5h4.75A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5H6.75a.75.75 0 0 0 0 1.5h4.75a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zm3.03 5.97l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H1.75a.75.75 0 0 0 0 1.5h5.69L6.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06");
}
</style><path class="j5udwcc0k"/>`,
		"fallback": "fluent:arrow-enter-16-filled",
	});
}

export default Component;
