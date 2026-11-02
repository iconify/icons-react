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
		"content": `<style>.ru2dtsixs {
  fill: currentColor;
  d: path("M8 6h8V3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2h-3v8h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H8v3a1 1 0 0 1-2 0v-3H3a1 1 0 0 1 0-2h3V8H3a1 1 0 0 1 0-2h3V3a1 1 0 0 1 2 0Z");
}
</style><path class="ru2dtsixs"/>`,
		"fallback": "coolicons:frame-fill",
	});
}

export default Component;
