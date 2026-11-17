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
		"content": `<style>.sjmmmrbwi {
  fill: currentColor;
  d: path("M18 2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2v10a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm-4.2 6.6a1 1 0 0 0-1.6-1.2l-3 4A.999.999 0 0 0 10 13h2l-1.8 2.4a1 1 0 0 0 1.6 1.2l3-4A.999.999 0 0 0 14 11h-2Z");
}
</style><path class="sjmmmrbwi"/>`,
		"fallback": "coolicons:fuse-fill",
	});
}

export default Component;
