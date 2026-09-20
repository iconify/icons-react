import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yupa8gb2r {
  fill: currentColor;
  d: path("M3.75 3a.75.75 0 0 1 .75.75v17.5a2.25 2.25 0 0 0 2.25 2.25h17.5a.75.75 0 0 1 0 1.5H6.75A3.75 3.75 0 0 1 3 21.25V3.75A.75.75 0 0 1 3.75 3m18.19 4.5l-5.69 5.69l-2.47-2.47a.75.75 0 0 0-1.06 0l-5.5 5.5a.75.75 0 1 0 1.06 1.06l4.97-4.97l2.47 2.47a.75.75 0 0 0 1.06 0L23 8.56v3.69a.75.75 0 0 0 1.5 0v-5.5a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0 0 1.5z");
}
</style><path class="yupa8gb2r"/>`,
		"fallback": "fluent:data-trending-28-regular",
	});
}

export default Component;
