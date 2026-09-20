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
		"content": `<style>.x0kuoacrp {
  fill: currentColor;
  d: path("M8 21v-2H2V3h20v16h-6v2zM4.8 11l2.6-2.6L6 7l-4 4l4 4l1.4-1.4zm14.4 0l-2.6 2.6L18 15l4-4l-4-4l-1.4 1.4z");
}
</style><path class="x0kuoacrp"/>`,
		"fallback": "material-symbols:developer-mode-tv-sharp",
	});
}

export default Component;
