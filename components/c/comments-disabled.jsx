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
		"content": `<style>.yaouvnxht {
  fill: currentColor;
  d: path("m20.475 23.3l-5.3-5.3H4q-.825 0-1.412-.587T2 16V4.825L.675 3.5L2.1 2.075l19.8 19.8zM22 19.125L16.875 14H18v-2h-3.125l-1-1H18V9h-6.125l-1-1H18V6H8.875l-4-4H20q.825 0 1.413.588T22 4zM6 14h5.175l-2-2H6zm0-3h2.175l-2-2H6z");
}
</style><path class="yaouvnxht"/>`,
		"fallback": "material-symbols:comments-disabled",
	});
}

export default Component;
