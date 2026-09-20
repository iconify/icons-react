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
		"content": `<style>.ygx2hdbkn {
  fill: currentColor;
  d: path("M196 128a12 12 0 0 1-4.5 9.37l-40 32A12 12 0 0 1 132 160v-19.83l-36.5 29.2A12 12 0 0 1 76 160V96a12 12 0 0 1 19.5-9.37l36.5 29.2V96a12 12 0 0 1 19.5-9.37l40 32A12 12 0 0 1 196 128m40 0A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84");
}
</style><path class="ygx2hdbkn"/>`,
		"fallback": "ph:fast-forward-circle-bold",
	});
}

export default Component;
