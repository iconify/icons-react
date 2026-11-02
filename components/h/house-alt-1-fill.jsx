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
		"content": `<style>.w-8gk3bps {
  fill: currentColor;
  d: path("M11 17v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7c0-1.039.578-1.992 1.293-2.707l6-6a2.414 2.414 0 0 1 3.414 0l6 6C20.422 10.008 21 10.961 21 12v7a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-2a1 1 0 0 0-2 0");
}
</style><path class="w-8gk3bps"/>`,
		"fallback": "coolicons:house-alt-1-fill",
	});
}

export default Component;
