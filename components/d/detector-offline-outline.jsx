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
		"content": `<style>.f1dphdcji {
  fill: currentColor;
  d: path("M9.4 21L8 19.6l2.6-2.6L8 14.4L9.4 13l2.6 2.6l2.6-2.6l1.4 1.4l-2.6 2.6l2.6 2.6l-1.4 1.4l-2.6-2.6zM5 5v1h14V5zm3.1 3l.3 1h7.2l.3-1zm.3 3q-.65 0-1.175-.387T6.5 9.6L6 8H5q-.825 0-1.412-.587T3 6V3h18v3q0 .825-.587 1.413T19 8h-1l-.65 1.7q-.225.575-.725.938T15.5 11zM5 5v1z");
}
</style><path class="f1dphdcji"/>`,
		"fallback": "material-symbols:detector-offline-outline",
	});
}

export default Component;
