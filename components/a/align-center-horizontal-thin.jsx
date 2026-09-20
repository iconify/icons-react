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
		"content": `<style>.e2003mfwl {
  fill: currentColor;
  d: path("M208 140h-76v-24h52a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12h-52V32a4 4 0 0 0-8 0v20H72a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h52v24H48a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h76v20a4 4 0 0 0 8 0v-20h76a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12M68 104V64a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4m144 88a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z");
}
</style><path class="e2003mfwl"/>`,
		"fallback": "ph:align-center-horizontal-thin",
	});
}

export default Component;
