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
		"content": `<style>.w330l1b1h {
  fill: currentColor;
  d: path("M3 20V3h16v7.075q-.25-.05-.5-.062T18 10t-.5.013t-.5.062V5H5v10h7.075q-.05.25-.062.5T12 16t.013.5t.062.5H6zM7 9h8V7H7zm0 4h5v-2H7zm10 7v-3h-3v-2h3v-3h2v3h3v2h-3v3zM5 15V5z");
}
</style><path class="w330l1b1h"/>`,
		"fallback": "material-symbols:chat-add-on-outline-sharp",
	});
}

export default Component;
