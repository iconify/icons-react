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
		"content": `<style>.w_lmym3-t {
  fill: currentColor;
  d: path("m21 18.15l-2-2V5H7.85l-2-2H19q.825 0 1.413.588T21 5zm-1.2 4.45L18.2 21H5q-.825 0-1.412-.587T3 19V5.8L1.4 4.2l1.4-1.4l18.4 18.4zM6 17l3-4l2.25 3l.825-1.1L5 7.825V19h11.175l-2-2zm4.6-3.6");
}
</style><path class="w_lmym3-t"/>`,
		"fallback": "material-symbols:hide-image-outline",
	});
}

export default Component;
