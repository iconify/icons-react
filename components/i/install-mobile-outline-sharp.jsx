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
		"content": `<style>.tlf759bvs {
  fill: currentColor;
  d: path("M5 23V1h9v2H7v1h7v2H7v12h10v-2h2v7zm2-3v1h10v-1zm11-6l-5-5l1.4-1.4l2.6 2.6V3h2v7.2l2.6-2.6L23 9zM7 4V3zm0 16v1z");
}
</style><path class="tlf759bvs"/>`,
		"fallback": "material-symbols:install-mobile-outline-sharp",
	});
}

export default Component;
