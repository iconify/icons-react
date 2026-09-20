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
		"content": `<style>.ermaqxdfd {
  fill: currentColor;
  d: path("m12 22l-9-8.9L8 7h8l5 6.1zM4.575 7L2.45 4.875l1.425-1.4L6 5.6zM11 5V2h2v3zm8.375 2L17.95 5.575l2.125-2.125L21.5 4.875zM12 19.2l5.25-5.2H6.75zM8.95 9l-2.475 3h11.05L15.05 9z");
}
</style><path class="ermaqxdfd"/>`,
		"fallback": "material-symbols:diamond-shine-outline",
	});
}

export default Component;
