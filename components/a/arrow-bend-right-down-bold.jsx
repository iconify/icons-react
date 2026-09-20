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
		"content": `<style>.q7c1m8xid {
  fill: currentColor;
  d: path("m208.49 184.49l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 0 1 17-17L140 195v-67a84.09 84.09 0 0 0-84-84a12 12 0 0 1 0-24a108.12 108.12 0 0 1 108 108v67l27.51-27.52a12 12 0 0 1 17 17Z");
}
</style><path class="q7c1m8xid"/>`,
		"fallback": "ph:arrow-bend-right-down-bold",
	});
}

export default Component;
