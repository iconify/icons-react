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
		"content": `<style>.eoio_sbwf {
  fill: currentColor;
  d: path("M4 21v-2h16v2zm0-4V3h16q.825 0 1.413.588T22 5v3q0 .825-.587 1.413T20 10h-2v7zM6 5h10zm12 3h2V5h-2zm-2 7V5h-6v.4L12 7v5H7V7l2-1.6V5H6v10zM9 5h1z");
}
</style><path class="eoio_sbwf"/>`,
		"fallback": "material-symbols:emoji-food-beverage-outline-sharp",
	});
}

export default Component;
