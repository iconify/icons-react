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
		"content": `<style>.cz6ymq6ah {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm12.275-2H19v-1.725zM5.85 19h1.825l3-3H12.8l-3 3h1.6l3-3h2.125l-3 3h1.625l3-3H19V5H5v12.725L6.725 16H8.85zm1.8-5l-1.4-1.4l4.425-4.425l2 2L16.35 6.5l1.4 1.4l-5.075 5.1l-2-2zM5 19V5z");
}
</style><path class="cz6ymq6ah"/>`,
		"fallback": "material-symbols:data-thresholding-outline",
	});
}

export default Component;
