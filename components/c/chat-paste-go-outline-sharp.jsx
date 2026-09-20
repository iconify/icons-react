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
		"content": `<style>.r2fn80bzv {
  fill: currentColor;
  d: path("m18 21l-1.4-1.4l1.575-1.6H14v-2h4.175L16.6 14.4L18 13l4 4zM3 21V4h16v7.075q-.25-.05-.5-.062T18 11t-.5.013t-.5.062V6H5v10h7.075q-.05.25-.062.5T12 17t.013.5t.062.5H6zm4-11h8V8H7zm0 4h5v-2H7zm-2 2V6z");
}
</style><path class="r2fn80bzv"/>`,
		"fallback": "material-symbols:chat-paste-go-outline-sharp",
	});
}

export default Component;
