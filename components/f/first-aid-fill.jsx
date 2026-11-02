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
		"content": `<style>.gz4cdl9wq {
  fill: currentColor;
  d: path("M16 8h3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-3v3a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-3H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h3V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3Z");
}
</style><path class="gz4cdl9wq"/>`,
		"fallback": "coolicons:first-aid-fill",
	});
}

export default Component;
