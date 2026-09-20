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
		"content": `<style>.ujy4r3azr {
  fill: currentColor;
  d: path("M4 11V4h7v7zm0 9v-7h7v7zm9-9V4h7v7zm0 9v-7h7v7zM5 10h5V5H5zm9 0h5V5h-5zm0 9h5v-5h-5zm-9 0h5v-5H5zm5-9");
}
</style><path class="ujy4r3azr"/>`,
		"fallback": "material-symbols-light:grid-view-outline",
	});
}

export default Component;
