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
		"content": `<style>.vnfar-bps {
  fill: currentColor;
  d: path("M5.414 11H21a1 1 0 0 1 0 2H5.414l4.293 4.293a.999.999 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a.999.999 0 1 1 1.414 1.414Z");
}
</style><path class="vnfar-bps"/>`,
		"fallback": "coolicons:arrow-left-large-fill-sharp",
	});
}

export default Component;
