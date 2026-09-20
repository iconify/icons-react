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
		"content": `<style>.a66c6bbgp {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19v-6.6l3 3l4-4l4 4l4-4l3 3V19q0 .825-.587 1.413T19 21zM5 3h14q.825 0 1.413.588T21 5v6.575l-3-3l-4 4l-4-4l-4 4l-3-3V5q0-.825.588-1.412T5 3");
}
</style><path class="a66c6bbgp"/>`,
		"fallback": "material-symbols:broken-image",
	});
}

export default Component;
