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
		"content": `<style>.h967h1b_v {
  fill: currentColor;
  d: path("M4 11V4h7v7zm0 9v-7h7v7zm9-9V4h7v7zm0 9v-7h7v7z");
}
</style><path class="h967h1b_v"/>`,
		"fallback": "material-symbols-light:grid-view",
	});
}

export default Component;
