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
		"content": `<style>.hdq7ptoqi {
  fill: currentColor;
  d: path("M9 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4v2H5v14h4zm2 2V1h2v22zm4-2v-2h2v2zm0-16V3h2v2zm4 16v-2h2q0 .825-.587 1.413T19 21m0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm0-4V3q.825 0 1.413.588T21 5z");
}
</style><path class="hdq7ptoqi"/>`,
		"fallback": "material-symbols:flip",
	});
}

export default Component;
