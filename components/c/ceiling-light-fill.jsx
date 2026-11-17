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
		"content": `<style>.p0armybkg {
  fill: currentColor;
  d: path("M11 3a1 1 0 0 1 2 0v3.049A10.005 10.005 0 0 1 22 16a1 1 0 0 1-1 1h-4.099a5.003 5.003 0 0 1-9.802 0H3a1 1 0 0 1-1-1c0-5.134 3.892-9.436 9-9.951Zm3.83 14H9.17a3.002 3.002 0 0 0 5.66 0");
}
</style><path class="p0armybkg"/>`,
		"fallback": "coolicons:ceiling-light-fill",
	});
}

export default Component;
