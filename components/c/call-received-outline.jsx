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
		"content": `<style>.sxwgrgb_u {
  fill: currentColor;
  d: path("M5 19V9h2v6.6L18.6 4L20 5.4L8.4 17H15v2z");
}
</style><path class="sxwgrgb_u"/>`,
		"fallback": "material-symbols:call-received-outline",
	});
}

export default Component;
