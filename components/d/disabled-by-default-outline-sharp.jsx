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
		"content": `<style>.o91o80bsg {
  fill: currentColor;
  d: path("M5 19h14V5H5zm-2 2V3h18v18zm5.4-4l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zM5 19V5z");
}
</style><path class="o91o80bsg"/>`,
		"fallback": "material-symbols:disabled-by-default-outline-sharp",
	});
}

export default Component;
