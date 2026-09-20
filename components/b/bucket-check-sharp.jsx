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
		"content": `<style>.m6rix3b_z {
  fill: currentColor;
  d: path("M5 21L3 7h3V3h12v4h3l-2 14zm5.95-4l4.95-4.95l-1.425-1.4l-3.525 3.525l-1.425-1.425L8.1 14.175zM8 7h8V5H8z");
}
</style><path class="m6rix3b_z"/>`,
		"fallback": "material-symbols:bucket-check-sharp",
	});
}

export default Component;
