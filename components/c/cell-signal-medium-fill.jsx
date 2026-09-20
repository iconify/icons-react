import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r20qm--sg {
  fill: currentColor;
  d: path("M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M192 200h-64v-96l64-64Z");
}
</style><path class="r20qm--sg"/>`,
		"fallback": "ph:cell-signal-medium-fill",
	});
}

export default Component;
