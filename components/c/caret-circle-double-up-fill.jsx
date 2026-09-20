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
		"content": `<style>.atu-u_blv {
  fill: currentColor;
  d: path("M201.58 54.43a104 104 0 1 0 0 147.14a104.17 104.17 0 0 0 0-147.14m-35.9 119.25a8 8 0 0 1-11.32 0L128 147.32l-26.35 26.36a8 8 0 1 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 .03 11.32m0-56a8 8 0 0 1-11.32 0L128 91.29l-26.35 26.36a8 8 0 1 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 .03 11.32Z");
}
</style><path class="atu-u_blv"/>`,
		"fallback": "ph:caret-circle-double-up-fill",
	});
}

export default Component;
