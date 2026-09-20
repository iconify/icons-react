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
		"content": `<style>.mt3vtqm1b {
  fill: currentColor;
  d: path("M232 112v32a8 8 0 0 1-8 8H56v16h88a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H56v8a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0v8h120a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H56v16h168a8 8 0 0 1 8 8");
}
</style><path class="mt3vtqm1b"/>`,
		"fallback": "ph:chart-bar-horizontal-fill",
	});
}

export default Component;
