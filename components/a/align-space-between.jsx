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
		"content": `<style>.pyubxpfrq {
  fill: currentColor;
  d: path("M7.5 6V4H3V3h18v1h-4.5v2zM3 21v-1h4.5v-2h9v2H21v1z");
}
</style><path class="pyubxpfrq"/>`,
		"fallback": "material-symbols-light:align-space-between",
	});
}

export default Component;
