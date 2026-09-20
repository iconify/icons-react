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
		"content": `<style>.h02qa9sxs {
  fill: currentColor;
  d: path("M4 14v-2h16v2zm0-3V9h16v2zm7 11v-3.2l-1.6 1.6L8 19l4-4l4 4l-1.4 1.4l-1.6-1.55V22zm1-14L8 4l1.4-1.4L11 4.2V1h2v3.2l1.6-1.6L16 4z");
}
</style><path class="h02qa9sxs"/>`,
		"fallback": "material-symbols:compress-sharp",
	});
}

export default Component;
