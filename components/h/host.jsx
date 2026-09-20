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
		"content": `<style>.j8j--qbpg {
  fill: currentColor;
  d: path("M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h5q.825 0 1.413.588T11 5v14q0 .825-.587 1.413T9 21zm11 0q-.825 0-1.412-.587T13 19V5q0-.825.588-1.412T15 3h5q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zM5 15h3v-2H5zm11 0h3v-2h-3zM5 12h3v-2H5zm11 0h3v-2h-3zM5 9h3V7H5zm11 0h3V7h-3z");
}
</style><path class="j8j--qbpg"/>`,
		"fallback": "material-symbols:host",
	});
}

export default Component;
