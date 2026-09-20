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
		"content": `<style>.wfkgc1bry {
  fill: currentColor;
  d: path("M19 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21M5 19h7v-8l7 8V5h-7v6z");
}
</style><path class="wfkgc1bry"/>`,
		"fallback": "material-symbols:filter-b-and-w-outline",
	});
}

export default Component;
