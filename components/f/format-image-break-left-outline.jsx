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
		"content": `<style>.v-33jhb-o {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm0-4V7h10v10zm2-2h6V9H5zM3 5V3h18v2zm5 7");
}
</style><path class="v-33jhb-o"/>`,
		"fallback": "material-symbols:format-image-break-left-outline",
	});
}

export default Component;
