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
		"content": `<style>.vsyaiubli {
  fill: currentColor;
  d: path("m14.764 10l5.789-2.894a1 1 0 1 1 .894 1.788L16 11.618V12a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-1a1 1 0 0 1 1-1Z");
}
</style><path class="vsyaiubli"/>`,
		"fallback": "coolicons:frying-pan-fill-round",
	});
}

export default Component;
