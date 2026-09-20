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
		"content": `<style>.p6j6zhbeq {
  fill: currentColor;
  d: path("M7.5 9.5V4H3V3h18v1h-4.5v5.5zM3 21v-1h4.5v-5.5h9V20H21v1z");
}
</style><path class="p6j6zhbeq"/>`,
		"fallback": "material-symbols-light:align-stretch",
	});
}

export default Component;
