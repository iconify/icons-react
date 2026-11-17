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
		"content": `<style>.h-qoyro3h {
  fill: currentColor;
  d: path("m14.764 10l5.789-2.894a1 1 0 1 1 .894 1.788L16 11.618V14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1Z");
}
</style><path class="h-qoyro3h"/>`,
		"fallback": "coolicons:frying-pan-fill",
	});
}

export default Component;
