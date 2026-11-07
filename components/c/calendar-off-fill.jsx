import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yesujzmab {
  fill: currentColor;
  d: path("m2.707 1.293l20 20a.999.999 0 1 1-1.414 1.414l-1.388-1.388A3.04 3.04 0 0 1 18 22H6a3.004 3.004 0 0 1-3-3V7c0-.694.241-1.368.681-1.905L1.293 2.707a.999.999 0 1 1 1.414-1.414M15 3a1 1 0 0 1 2 0v1h1a3 3 0 0 1 3 3v7a1 1 0 0 1-2 0v-4h-4.757l-6-6H15Zm-6.414 7H5v9a1 1 0 0 0 1 1h12a1 1 0 0 0 .469-.116Z");
}
</style><path class="yesujzmab"/>`,
		"fallback": "coolicons:calendar-off-fill",
	});
}

export default Component;
